

 import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    FaTrophy,
    FaUsers,
    FaFutbol,
    FaCheckCircle,
    FaCalendarAlt,
} from "react-icons/fa";

import DashboardCard from "./DashboardCard";
import { getDashboard } from "../../services/dashboardService";

function Dashboard() {

    const [stats, setStats] = useState(null);
    const navigate = useNavigate();
    
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

    return (
        <div>

            <h1 className="text-3xl font-bold mb-8">
                Dashboard
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6">

                <DashboardCard
                    title="Tournaments"
                    value={stats.totalTournaments}
                    icon={<FaTrophy />}
                    color="#16a34a"
                />

                <DashboardCard
                    title="Teams"
                    value={stats.totalTeams}
                    icon={<FaUsers />}
                    color="#2563eb"
                />

                <DashboardCard
                    title="Matches"
                    value={stats.totalMatches}
                    icon={<FaFutbol />}
                    color="#f97316"
                />

                <DashboardCard
                    title="Completed"
                    value={stats.completedMatches}
                    icon={<FaCheckCircle />}
                    color="#7c3aed"
                />

                <DashboardCard
                    title="Upcoming"
                    value={stats.upcomingMatches}
                    icon={<FaCalendarAlt />}
                    color="#dc2626"
                />

            </div>

<div className="mt-10">

    <h2 className="text-2xl font-semibold mb-5">
        Quick Actions
    </h2>

    <div className="flex flex-wrap gap-4">

        <button
    onClick={() => navigate("/tournaments/create")}
    className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
>
    Create Tournament
</button>

       <button
    onClick={() => navigate("/teams/create")}
    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
>
    Add Team
</button>

      <button
    onClick={() => navigate("/matches")}
    className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition"
>
    View Matches
</button>

    </div>

</div>
        </div>
    );
}




export default Dashboard;