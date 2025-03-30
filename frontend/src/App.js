import React, {useEffect, useState} from 'react';
import InvestmentForm from './components/InvestmentForm';
import InvestmentTable from './components/InvestmentTable';

function App() {
    const [investments, setInvestments] = useState([]);

    const [formData, setFormData] = useState({
        broker: '',
        name: '',
        symbol: '',
        units: '',
        value: ''
    });


    useEffect(() => {
        fetch('http://127.0.0.1:8080/investments/')
            .then((res) => res.json())
            .then((data) => setInvestments(data));
    }, []);

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://127.0.0.1:8080/investments/', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
        })
            .then((res) => res.json())
            .then((data) => {
                setInvestments([...investments, data]);
                setFormData({
                    broker: '', name: '', symbol: '',
                    purchase_date: '', purchase_amount: '', current_value: ''
                });
            });
    };

    const handleDelete = (id) => {
        fetch(`http://127.0.0.1:8080/investments/${id}/`, {
            method: 'DELETE'
        })
            .then((res) => {
                if (res.ok) {
                    setInvestments(investments.filter((inv) => inv.id !== id));
                } else {
                    console.error('Failed to delete investment');
                }
            });
    };

    return (
        <div className="container mt-4">
            <h1 className="mb-4">Investments Dashboard</h1>
            <InvestmentForm formData={formData} onChange={handleChange} onSubmit={handleSubmit}/>
            <InvestmentTable investments={investments} onDelete={handleDelete}/>
        </div>
    );
}


export default App;
