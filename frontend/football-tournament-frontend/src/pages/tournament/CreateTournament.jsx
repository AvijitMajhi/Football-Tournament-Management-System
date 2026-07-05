import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createTournament } from "../../services/tournamentService";
function CreateTournament() {

    const [formData, setFormData] = useState({
        name: "",
        description: "",
        location: "",
        startDate: "",
        endDate: "",
        registrationDeadline: "",
        tournamentType: "League",
        maxTeams: 8,
        banner: null,
    });
    const navigate = useNavigate();
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

        data.append("name", formData.name);
        data.append("description", formData.description);
        data.append("location", formData.location);
        data.append("startDate", formData.startDate);
        data.append("endDate", formData.endDate);
        data.append("registrationDeadline", formData.registrationDeadline);
        data.append("tournamentType", formData.tournamentType);
        data.append("maxTeams", formData.maxTeams);

        if (formData.banner) {
            data.append("banner", formData.banner);
        }

        await createTournament(data);

        alert("Tournament created successfully!");

        navigate("/tournaments");

    } catch (error) {
        console.error(error);

        alert(
            error.response?.data?.message ||
            "Failed to create tournament"
        );
    }
};
    return (
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8">

            <h1 className="text-3xl font-bold mb-8">
                Create Tournament
            </h1>

            <form onSubmit={handleSubmit} className="space-y-5">

                <input
                    name="name"
                    placeholder="Tournament Name"
                    onChange={handleChange}
                    className="w-full border rounded-lg p-3"
                />

                <textarea
                    name="description"
                    placeholder="Description"
                    onChange={handleChange}
                    className="w-full border rounded-lg p-3"
                />

                <input
                    name="location"
                    placeholder="Location"
                    onChange={handleChange}
                    className="w-full border rounded-lg p-3"
                />

                <input
                    type="date"
                    name="startDate"
                    onChange={handleChange}
                    className="w-full border rounded-lg p-3"
                />

                <input
                    type="date"
                    name="endDate"
                    onChange={handleChange}
                    className="w-full border rounded-lg p-3"
                />

                <input
                    type="date"
                    name="registrationDeadline"
                    onChange={handleChange}
                    className="w-full border rounded-lg p-3"
                />

                <select
                    name="tournamentType"
                    onChange={handleChange}
                    className="w-full border rounded-lg p-3"
                >
                    <option>League</option>
                    <option>Knockout</option>
                </select>

                <input
                    type="number"
                    name="maxTeams"
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
    Create Tournament
</button>

            </form>

        </div>
    );
}

export default CreateTournament;