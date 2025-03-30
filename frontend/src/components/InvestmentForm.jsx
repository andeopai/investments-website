import React from 'react';

export default function InvestmentForm({formData, onChange, onSubmit}) {
    return (
        <form onSubmit={onSubmit} className="mb-5">
            <div className="row g-3">
                <div className="col-md-4">
                    <input
                        type="text"
                        className="form-control"
                        name="broker"
                        placeholder="Broker"
                        value={formData.broker}
                        onChange={onChange}
                        required
                    />
                </div>
                <div className="col-md-4">
                    <input
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={onChange}
                        required
                    />
                </div>
                <div className="col-md-4">
                    <input
                        type="text"
                        className="form-control"
                        name="symbol"
                        placeholder="Symbol"
                        value={formData.symbol}
                        onChange={onChange}
                        required
                    />
                </div>
                <div className="col-md-4">
                    <input
                        type="number"
                        step="0.01"
                        className="form-control"
                        name="units"
                        placeholder="Units"
                        value={formData.units}
                        onChange={onChange}
                        required
                    />
                </div>
                <div className="col-md-4">
                    <input
                        type="number"
                        step="0.01"
                        className="form-control"
                        name="value"
                        placeholder="Value (optional)"
                        value={formData.value}
                        onChange={onChange}
                    />
                </div>
            </div>
            <button type="submit" className="btn btn-success mt-3">Add Investment</button>
        </form>
    );
}
