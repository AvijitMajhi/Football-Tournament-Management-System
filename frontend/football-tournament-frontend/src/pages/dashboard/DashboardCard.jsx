function DashboardCard({ title, value, icon, color }) {
    return (
        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border-l-4"
             style={{ borderLeftColor: color }}>
            
            <div className="flex justify-between items-center">

                <div>
                    <p className="text-gray-500 text-sm">
                        {title}
                    </p>

                    <h2 className="text-4xl font-bold mt-2">
                        {value}
                    </h2>
                </div>

                <div
                    className="text-5xl"
                    style={{ color }}
                >
                    {icon}
                </div>

            </div>
        </div>
    );
}

export default DashboardCard;