import { useNavigate } from "react-router-dom";

function MatchCard({ match }) {
    const navigate = useNavigate();

    const getStatusColor = () => {
        switch (match.status) {
            case "Completed":
                return "bg-green-100 text-green-700";
            case "Live":
                return "bg-red-100 text-red-700";
            default:
                return "bg-yellow-100 text-yellow-700";
        }
    };

    return (
        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">

            {/* Header */}
            <div className="bg-green-700 text-white px-5 py-3 flex justify-between items-center">
                <div>
                    <h2 className="font-bold text-lg">
                        Match #{match.matchNumber}
                    </h2>
                    <p className="text-sm text-green-100">
                        {match.tournament.name}
                    </p>
                </div>

                <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor()}`}
                >
                    {match.status}
                </span>
            </div>

            {/* Teams */}
            <div className="p-6">

                <div className="flex items-center justify-between">

                    {/* Home Team */}
                    <div className="flex flex-col items-center w-2/5">

                        <img
                            src={
                                match.homeTeam?.logo ||
                                "https://placehold.co/100x100?text=Logo"
                            }
                            alt={match.homeTeam?.name|| "TBD"}
                            className="w-20 h-20 rounded-full object-cover border"
                        />

                        <h3 className="mt-3 font-bold text-center">
                            {match.homeTeam?.name|| "TBD"}
                        </h3>

                        <p className="text-gray-500 text-sm">
                            {match.homeTeam?.shortName|| "TBD"}
                        </p>

                    </div>

                    {/* Score */}
                    <div className="text-center">

                        {match.status === "Completed" ? (
                            <>
                                <div className="text-center">

    <span className="text-3xl font-bold">
        {match.homeScore}
    </span>

    <span className="mx-3 text-gray-500 text-xl">
        -
    </span>

    <span className="text-3xl font-bold">
        {match.awayScore}
    </span>

    <p className="text-xs text-gray-500 mt-2">
        Full Time
    </p>

</div>

                                
                            </>
                        ) : (
                            <>
                                <h2 className="text-3xl font-bold text-gray-700">
                                    VS
                                </h2>

                                <p className="text-gray-500 mt-2">
                                    Round {match.round}
                                </p>
                            </>
                        )}

                    </div>

                    {/* Away Team */}
                    <div className="flex flex-col items-center w-2/5">

                        <img
                            src={
                                match.awayTeam?.logo ||
                                "https://placehold.co/100x100?text=Logo"
                            }
                            alt={match.awayTeam?.name|| "TBD"}
                            className="w-20 h-20 rounded-full object-cover border"
                        />

                        <h3 className="mt-3 font-bold text-center">
                            {match.awayTeam?.name|| "TBD"}
                        </h3>

                        <p className="text-gray-500 text-sm">
                            {match.awayTeam?.shortName|| "TBD"}
                        </p>

                    </div>

                </div>

                {/* Match Details */}
                <div className="mt-6 border-t pt-4 text-sm text-gray-600 space-y-2">

                    <div className="flex justify-between">
                        <span>📅 Match Date</span>
                        <span>
                            {new Date(match.matchDate).toLocaleDateString()}
                        </span>
                    </div>

                    <div className="flex justify-between">
                        <span>🏟 Venue</span>
                        <span>{match.venue}</span>
                    </div>

                    <div className="flex justify-between">
                        <span>🏆 Round</span>
                        <span>{match.round}</span>
                    </div>

                </div>

                {/* Buttons */}
                <div className="flex gap-3 mt-6">

                    <button
                        onClick={() => navigate(`/matches/${match._id}`)}
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition"
                    >
                        View Details
                    </button>

                    {match.status !== "Completed" && (
                        <button
                            onClick={() =>
                                navigate(`/matches/${match._id}/result`)
                            }
                            className="flex-1 bg-green-700 hover:bg-green-800 text-white py-2 rounded-lg transition"
                        >
                            Enter Result
                        </button>
                    )}

                </div>

            </div>

        </div>
    );
}

export default MatchCard;