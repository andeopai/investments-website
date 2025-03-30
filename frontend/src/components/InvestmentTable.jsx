import React from 'react';

export default function InvestmentTable({investments, onDelete}) {
    if (!investments.length) {
        return <p>No investments found.</p>;
    }

    return (<table className="table table-striped table-hover">
            <thead className="table-dark">
            <tr>
                <th>Broker</th>
                <th>Name</th>
                <th>Symbol</th>
                <th>Units</th>
                <th>Value</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {investments.map((inv) => (<tr key={inv.id}>
                    <td>{inv.broker}</td>
                    <td>{inv.name}</td>
                    <td>{inv.symbol}</td>
                    <td>{inv.units}</td>
                    <td>{inv.value || '-'}</td>
                    <td>
                        <button
                            className="btn btn-sm btn-danger"
                            onClick={() => onDelete(inv.id)}
                        >
                            Delete
                        </button>
                    </td>
                </tr>))}
            </tbody>
        </table>);
}
