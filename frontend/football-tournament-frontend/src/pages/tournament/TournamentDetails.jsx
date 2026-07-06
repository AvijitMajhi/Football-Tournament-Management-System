import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getTournamentDashboard } from "../../services/tournamentService";
import { generateFixtures } from "../../services/matchService";

function TournamentDetails() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [generating, setGenerating] = useState(false);

    useEffect(() => {
        const fetchDashboard = async () => {
            try {
                setLoading(true);
                const response = await getTournamentDashboard(id);
                setData(response);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchDashboard();
    }, [id]);

    const handleGenerateFixtures = async () => {
        try {
            setGenerating(true);

            await generateFixtures(id);

            alert("Fixtures generated successfully!");

            // refresh dashboard instead of blindly navigating
            const updated = await getTournamentDashboard(id);
            setData(updated);

        } catch (error) {
            console.error(error);
            alert(
                error.response?.data?.message ||
                "Failed to generate fixtures"
            );
        } finally {
            setGenerating(false);
        }
    };

    if (loading) {
        return (
            <h2 className="text-2xl font-semibold">
                Loading...
            </h2>
        );
    }

    if (!data) {
        return (
            <h2 className="text-2xl font-semibold text-red-500">
                Failed to load tournament data
            </h2>
        );
    }

    const {
        tournament = {},
        totalTeams = 0,
        totalMatches = 0,
        completedMatches = 0,
        upcomingMatches = 0,
        recentMatches = [],
    } = data;

    return (
        <div className="space-y-8">

            {/* Banner */}
            <div className="bg-white rounded-xl shadow overflow-hidden">
               <img
    src={tournament?.banner}
    onError={(e) => {
        e.target.src = "/placeholder.jpg";
    }}
    className="w-full h-72 object-cover"
/>

                <div className="p-8">
                    <h1 className="text-4xl font-bold">
                        {tournament?.name}
                    </h1>

                    <p className="mt-3 text-gray-600">
                        📍 {tournament?.location}
                    </p>

                    <p className="text-gray-600">
                        🏆 {tournament?.tournamentType}
                    </p>

                    <p className="text-gray-600">
                        📅 {tournament?.startDate
                            ? new Date(tournament.startDate).toLocaleDateString()
                            : "N/A"}
                        {" - "}
                        {tournament?.endDate
                            ? new Date(tournament.endDate).toLocaleDateString()
                            : "N/A"}
                    </p>

                    <p className="mt-3">
                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
                            {tournament?.status || "N/A"}
                        </span>
                    </p>
                </div>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

                <div className="bg-white rounded-xl shadow p-6 text-center">
                    <h3 className="text-gray-500">Teams</h3>
                    <p className="text-4xl font-bold text-green-700">
                        {totalTeams}
                    </p>
                </div>

                <div className="bg-white rounded-xl shadow p-6 text-center">
                    <h3 className="text-gray-500">Matches</h3>
                    <p className="text-4xl font-bold text-blue-600">
                        {totalMatches}
                    </p>
                </div>

                <div className="bg-white rounded-xl shadow p-6 text-center">
                    <h3 className="text-gray-500">Completed</h3>
                    <p className="text-4xl font-bold text-purple-600">
                        {completedMatches}
                    </p>
                </div>

                <div className="bg-white rounded-xl shadow p-6 text-center">
                    <h3 className="text-gray-500">Remaining</h3>
                    <p className="text-4xl font-bold text-red-600">
                        {upcomingMatches}
                    </p>
                </div>

            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow p-6">

                <h2 className="text-2xl font-bold mb-5">
                    Quick Actions
                </h2>

                <div className="flex flex-wrap gap-4">

                    <button
                        onClick={() => navigate("/teams")}
                        className="bg-green-600 text-white px-5 py-3 rounded-lg"
                    >
                        Teams
                    </button>

                    <button
                        onClick={() => navigate("/matches")}
                        className="bg-blue-600 text-white px-5 py-3 rounded-lg"
                    >
                        Fixtures
                    </button>

                    <button
                        onClick={handleGenerateFixtures}
                        disabled={generating}
                        className="bg-orange-500 hover:bg-orange-600 disabled:opacity-50 text-white px-5 py-3 rounded-lg"
                    >
                        {generating ? "Generating..." : "Generate Fixtures"}
                    </button>

                    {tournament?.tournamentType !== "Knockout" && (
                        <button
                            onClick={() =>
                                navigate(`/tournaments/${id}/standings`)
                            }
                            className="bg-indigo-600 text-white px-5 py-3 rounded-lg"
                        >
                            Standings
                        </button>
                    )}

                </div>

            </div>

            {/* Recent Matches */}
            <div className="bg-white rounded-xl shadow p-6">

                <h2 className="text-2xl font-bold mb-5">
                    Recent Matches
                </h2>

                {recentMatches.length === 0 ? (
                    <p>No matches yet.</p>
                ) : (
                    recentMatches.map((match) => (
                        <div
                            key={match._id}
                            className="flex justify-between border-b py-3"
                        >
                            <span>
                                {match.homeTeam?.name || "TBD"}
                            </span>

                            <span className="font-bold">
                                {match.homeScore} - {match.awayScore}
                            </span>

                            <span>
                                {match.awayTeam?.name || "TBD"}
                            </span>
                        </div>
                    ))
                )}

            </div>

        </div>
    );
}

export default TournamentDetails;