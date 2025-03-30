import React from 'react';

export default function InvestmentTable({investments}) {
    if (!investments.length) {
        return <p>No investments found.</p>;
    }

    return (
        <table className="table table-striped table-hover">
            <thead className="table-dark">
            <tr>
                <th>Broker</th>
                <th>Name</th>
                <th>Symbol</th>
                <th>Purchase Date</th>
                <th>Amount</th>
                <th>Current Value</th>
            </tr>
            </thead>
            <tbody>
            {investments.map((inv, idx) => (
                <tr key={idx}>
                    <td>{inv.broker}</td>
                    <td>{inv.name}</td>
                    <td>{inv.symbol}</td>
                    <td>{inv.purchase_date}</td>
                    <td>${inv.purchase_amount}</td>
                    <td>${inv.current_value}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}
