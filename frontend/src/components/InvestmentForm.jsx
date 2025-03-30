import React from 'react';

export default function InvestmentForm({formData, onChange, onSubmit}) {
    const fields = ['broker', 'name', 'symbol', 'purchase_date', 'purchase_amount', 'current_value'];

    return (
        <form onSubmit={onSubmit} className="mb-5">
            <div className="row g-3">
                {fields.map((field) => (
                    <div key={field} className="col-md-4">
                        <input
                            type={field === 'purchase_date' ? 'date' : 'text'}
                            className="form-control"
                            name={field}
                            placeholder={field.replace('_', ' ').toUpperCase()}
                            value={formData[field]}
                            onChange={onChange}
                            required
                        />
                    </div>
                ))}
            </div>
            <button type="submit" className="btn btn-success mt-3">Add Investment</button>
        </form>
    );
}
