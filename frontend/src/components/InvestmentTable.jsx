export default function InvestmentTable({investments, onDelete}) {
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
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {investments.map((inv) => (
                <tr key={inv.id}>
                    <td>{inv.broker}</td>
                    <td>{inv.name}</td>
                    <td>{inv.symbol}</td>
                    <td>{inv.purchase_date}</td>
                    <td>${inv.purchase_amount}</td>
                    <td>${inv.current_value}</td>
                    <td>
                        <button
                            className="btn btn-sm btn-danger"
                            onClick={() => onDelete(inv.id)}
                        >
                            Delete
                        </button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}
