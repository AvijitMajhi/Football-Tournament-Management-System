import { useEffect, useState } from "react";
import { getDashboard } from "../../services/dashboardService";

function Dashboard() {
    const [stats, setStats] = useState(null);

    useEffect(() => {
        const fetchDashboard = async () => {
            try {
                const data = await getDashboard();
                setStats(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchDashboard();
    }, []);

    if (!stats) {
        return (
            <h2 className="text-2xl font-semibold">
                Loading...
            </h2>
        );
    }

    const cards = [
        { title: "Tournaments", value: stats.totalTournaments },
        { title: "Teams", value: stats.totalTeams },
        { title: "Matches", value: stats.totalMatches },
        { title: "Completed", value: stats.completedMatches },
        { title: "Upcoming", value: stats.upcomingMatches },
    ];

    return (
        <div>
            <h1 className="text-4xl font-bold mb-8">
                Dashboard
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">

                {cards.map((card) => (
                    <div
                        key={card.title}
                        className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition"
                    >
                        <h2 className="text-gray-500">
                            {card.title}
                        </h2>

                        <p className="text-4xl font-bold mt-3 text-green-700">
                            {card.value}
                        </p>
                    </div>
                ))}

            </div>
        </div>
    );
}

export default Dashboard;  