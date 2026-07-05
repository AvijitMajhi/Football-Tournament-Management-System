import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
    getTournamentById,
    updateTournament,
} from "../../services/tournamentService";

function EditTournament() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        description: "",
        location: "",
        startDate: "",
        endDate: "",
        registrationDeadline: "",
        tournamentType: "",
        maxTeams: "",
        banner: null,
    });

    useEffect(() => {
        const fetchTournament = async () => {
            try {
                const tournament = await getTournamentById(id);

                setFormData({
                    name: tournament.name,
                    description: tournament.description,
                    location: tournament.location,
                    startDate: tournament.startDate.slice(0, 10),
                    endDate: tournament.endDate.slice(0, 10),
                    registrationDeadline:
                        tournament.registrationDeadline.slice(0, 10),
                    tournamentType: tournament.tournamentType,
                    maxTeams: tournament.maxTeams,
                    banner: null,
                });
            } catch (error) {
                console.error(error);
            }
        };

        fetchTournament();
    }, [id]);

    const handleChange = (e) => {
        if (e.target.name === "banner") {
            setFormData({
                ...formData,
                banner: e.target.files[0],
            });
        } else {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value,
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const data = new FormData();

            Object.keys(formData).forEach((key) => {
                if (formData[key] !== null) {
                    data.append(key, formData[key]);
                }
            });

            await updateTournament(id, data);

            alert("Tournament updated successfully!");

            navigate(`/tournaments/${id}`);
        } catch (error) {
            console.error(error);

            alert(
                error.response?.data?.message ||
                "Failed to update tournament"
            );
        }
    };

    return (
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8">
            <h1 className="text-3xl font-bold mb-8">
                Edit Tournament
            </h1>

           <form onSubmit={handleSubmit} className="space-y-5">

                <input
                    name="name"
                    placeholder="Tournament Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border rounded-lg p-3"
                />

                <textarea
                    name="description"
                    placeholder="Description"
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full border rounded-lg p-3"
                />

                <input
                    name="location"
                    placeholder="Location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full border rounded-lg p-3"
                />

                <input
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    className="w-full border rounded-lg p-3"
                />

                <input
                    type="date"
                    name="endDate"
                    value={formData.endDate}    
                    onChange={handleChange}
                    className="w-full border rounded-lg p-3"
                />

                <input
                    type="date"
                    name="registrationDeadline"
                    value={formData.registrationDeadline}
                    onChange={handleChange}
                    className="w-full border rounded-lg p-3"
                />

                <select
                    name="tournamentType"
                    value={formData.tournamentType}
                    onChange={handleChange}
                    className="w-full border rounded-lg p-3"
                >
                    <option>League</option>
                    <option>Knockout</option>
                </select>

                <input
                    type="number"
                    name="maxTeams"
                    value={formData.maxTeams}
                    placeholder="Maximum Teams"
                    onChange={handleChange}
                    className="w-full border rounded-lg p-3"
                />

                <input
                    type="file"
                    name="banner"
                    accept="image/*"
                    onChange={handleChange}
                    className="w-full"
                />

                <button
    type="submit"
    className="w-full bg-green-700 hover:bg-green-800 text-white py-3 rounded-lg font-semibold transition"
>
    Update Tournament
</button>
<button
    type="button"
    onClick={() => navigate(`/tournaments/${id}`)}
    className="w-full mt-3 border border-gray-400 py-3 rounded-lg"
>
    Cancel
</button>

            </form>
            
        </div>
    );
}

export default EditTournament;