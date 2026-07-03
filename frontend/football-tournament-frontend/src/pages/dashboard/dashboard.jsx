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
        return <h2>Loading...</h2>;
    }

    return (
        <div>

            <h1>Dashboard</h1>

            <h3>Total Tournaments: {stats.totalTournaments}</h3>

            <h3>Total Teams: {stats.totalTeams}</h3>

            <h3>Total Matches: {stats.totalMatches}</h3>

            <h3>Completed Matches: {stats.completedMatches}</h3>

            <h3>Upcoming Matches: {stats.upcomingMatches}</h3>

        </div>
    );
}

export default Dashboard;