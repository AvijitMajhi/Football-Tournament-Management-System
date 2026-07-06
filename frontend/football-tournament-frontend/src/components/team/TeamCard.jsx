import { useNavigate } from "react-router-dom";
import { deleteTeam } from "../../services/teamService";

function TeamCard({ team }) {
    const navigate = useNavigate();

    const handleDelete = async () => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this team?"
        );

        if (!confirmDelete) return;

        try {
            await deleteTeam(team._id);

            alert("Team deleted successfully!");

            window.location.reload();
        } catch (error) {
            console.error(error);

            alert(
                error.response?.data?.message ||
                "Failed to delete team"
            );
        }
    };

    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">

            <img
                src={team.logo || "https://placehold.co/600x400?text=Team+Logo"}
                alt={team.name}
                className="w-full h-48 object-cover"
            />

            <div className="p-5">

                <h2 className="text-2xl font-bold">
                    {team.name}
                </h2>

                <p className="text-gray-600 mt-2">
                    Short Name: {team.shortName}
                </p>

                <p className="text-gray-600">
                    Coach: {team.coach || "-"}
                </p>

                <p className="text-gray-600">
                    Captain: {team.captain}
                </p>

                <div className="flex gap-3 mt-5">

                    <button
                        onClick={() => navigate(`/teams/${team._id}`)}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg"
                    >
                        View
                    </button>

                    <button
                        onClick={() => navigate(`/teams/${team._id}/edit`)}
                        className="bg-yellow-500 text-white px-4 py-2 rounded-lg"
                    >
                        Edit
                    </button>

                    <button
                        onClick={handleDelete}
                        className="bg-red-600 text-white px-4 py-2 rounded-lg"
                    >
                        Delete
                    </button>

                </div>

            </div>

        </div>
    );
}

export default TeamCard;