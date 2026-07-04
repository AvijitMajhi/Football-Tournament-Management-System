function StatCard({ title, value }) {
    return (
        <div
            style={{
                border: "1px solid #ddd",
                borderRadius: "10px",
                padding: "20px",
                minWidth: "220px",
                background: "#fff",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
        >
            <h3>{title}</h3>
            <h1>{value}</h1>
        </div>
    );
}

export default StatCard;