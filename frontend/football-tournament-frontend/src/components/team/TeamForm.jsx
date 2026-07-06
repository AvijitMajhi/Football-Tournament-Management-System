import { useEffect, useState } from "react";
import { getAllTournaments } from "../../services/tournamentService";

function TeamForm({
    formData,
    setFormData,
    handleSubmit,
    buttonText,
}) {
    const [tournaments, setTournaments] = useState([]);

    useEffect(() => {
        const fetchTournaments = async () => {
            try {
                const data = await getAllTournaments();
                setTournaments(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchTournaments();
    }, []);

    const handleChange = (e) => {
        if (e.target.name === "logo") {
            setFormData({
                ...formData,
                logo: e.target.files[0],
            });
        } else {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value,
            });
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-5">

            <input
                type="text"
                name="name"
                value={formData.name}
                placeholder="Team Name"
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
            />

            <input
                type="text"
                name="shortName"
                value={formData.shortName}
                placeholder="Short Name (e.g. BAR)"
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
            />

            <input
                type="text"
                name="coach"
                value={formData.coach}
                placeholder="Coach"
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
            />

            <input
                type="text"
                name="captain"
                value={formData.captain}
                placeholder="Captain"
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
            />

            <select
                name="tournament"
                value={formData.tournament}
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
            >
                <option value="">
                    Select Tournament
                </option>

                {tournaments.map((tournament) => (
                    <option
                        key={tournament._id}
                        value={tournament._id}
                    >
                        {tournament.name}
                    </option>
                ))}
            </select>

            <input
                type="file"
                name="logo"
                accept="image/*"
                onChange={handleChange}
            />

            <button
                type="submit"
                className="w-full bg-green-700 hover:bg-green-800 text-white py-3 rounded-lg font-semibold"
            >
                {buttonText}
            </button>

        </form>
    );
}

export default TeamForm;