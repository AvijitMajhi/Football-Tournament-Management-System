import { useNavigate } from "react-router-dom";
import { deleteTournament } from "../../services/tournamentService";
function TournamentCard({ tournament }) {
    const navigate = useNavigate();
const handleDelete = async () => {
    const confirmDelete = window.confirm(
        "Are you sure you want to delete this tournament?"
    );

    if (!confirmDelete) return;

    try {
        await deleteTournament(tournament._id);

        alert("Tournament deleted successfully!");

        window.location.reload();

    } catch (error) {
        console.error(error);

        alert(
            error.response?.data?.message ||
            "Failed to delete tournament"
        );
    }
};
    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">

            <img
                src={tournament.banner}
                alt={tournament.name}
                className="w-full h-52 object-cover"
            />

            <div className="p-5">

                <h2 className="text-2xl font-bold">
                    {tournament.name}
                </h2>

                <p className="text-gray-600 mt-2">
                    📍 {tournament.location}
                </p>

                <p className="text-gray-600">
                    👥 Max Teams: {tournament.maxTeams}
                </p>

                <p className="text-gray-600">
                    🏆 {tournament.tournamentType}
                </p>

                <div className="flex gap-3 mt-5">

                    <button
    onClick={() => navigate(`/tournaments/${tournament._id}`)}
    className="bg-blue-600 text-white px-4 py-2 rounded-lg"
>
    View
</button>

                    <button
                        onClick={() =>
                            navigate(`/tournaments/${tournament._id}/edit`)
                        }
                        className="bg-yellow-500 text-white px-4 py-2 rounded-lg"
                    >
                        Edit
                    </button>

                   <button
    onClick={handleDelete}
    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
>
    Delete
</button>

                </div>

            </div>

        </div>
    );
}

export default TournamentCard;