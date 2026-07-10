import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { getTeamsByTournament } from "../../services/teamService";
import { createMatch } from "../../services/matchService";

function CreateMatch() {

    const { tournamentId } = useParams();
    const navigate = useNavigate();

    const [teams, setTeams] = useState([]);

    const [formData, setFormData] = useState({
        homeTeam: "",
        awayTeam: "",
        matchDate: "",
        venue: "",
        round: "Quarter Final",
    });
    const rounds = [
    "Round of 64",
    "Round of 32",
    "Round of 16",
    "Quarter Final",
    "Semi Final",
    "Third Place",
    "Final",
];
    useEffect(() => {

    const fetchTeams = async () => {

        try {

            const response =
                await getTeamsByTournament(tournamentId);

            setTeams(response);

        } catch (error) {

            console.error(error);

        }

    };

    fetchTeams();

}, [tournamentId]);
    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (formData.homeTeam === formData.awayTeam) {

            alert("Home and Away teams cannot be the same.");

            return;

        }

        try {

            await createMatch({

                tournament: tournamentId,

                homeTeam: formData.homeTeam,

                awayTeam: formData.awayTeam,

                matchDate: formData.matchDate,

                venue: formData.venue,

                round: formData.round,

            });

            alert("Match created successfully.");

            navigate("/matches");

        } catch (error) {

            console.error(error);

            alert(
                error.response?.data?.message ||
                "Failed to create match"
            );

        }

    };

    return (

        <div className="max-w-2xl mx-auto bg-white shadow rounded-xl p-8">

            <h1 className="text-3xl font-bold mb-8">
                Create Knockout Match
            </h1>

            <form
                onSubmit={handleSubmit}
                className="space-y-5"
            >

                <div>

                    <label className="block mb-2 font-medium">
                        Home Team
                    </label>

                    <select
                        name="homeTeam"
                        value={formData.homeTeam}
                        onChange={handleChange}
                        className="w-full border rounded-lg p-3"
                        required
                    >

                        <option value="">
                            Select Home Team
                        </option>

                        {teams.map((team) => (

                            <option
                                key={team._id}
                                value={team._id}
                            >
                                {team.name}
                            </option>

                        ))}

                    </select>

                </div>

                <div>

                    <label className="block mb-2 font-medium">
                        Away Team
                    </label>

                    <select
                        name="awayTeam"
                        value={formData.awayTeam}
                        onChange={handleChange}
                        className="w-full border rounded-lg p-3"
                        required
                    >

                        <option value="">
                            Select Away Team
                        </option>

                        {teams.map((team) => (

                            <option
                                key={team._id}
                                value={team._id}
                            >
                                {team.name}
                            </option>

                        ))}

                    </select>

                </div>

                <div>

                    <label className="block mb-2 font-medium">
                        Match Date
                    </label>

                    <input
                        type="datetime-local"
                        name="matchDate"
                        value={formData.matchDate}
                        onChange={handleChange}
                        className="w-full border rounded-lg p-3"
                        required
                    />

                </div>

                <div>

                    <label className="block mb-2 font-medium">
                        Venue
                    </label>

                    <input
                        type="text"
                        name="venue"
                        value={formData.venue}
                        onChange={handleChange}
                        className="w-full border rounded-lg p-3"
                        required
                    />

                </div>

                <div>

                    <label className="block mb-2 font-medium">
                        Round
                    </label>

                 <select
    name="round"
    value={formData.round}
    onChange={handleChange}
    className="w-full border rounded-lg p-3"
>
    {rounds.map((round) => (
        <option
            key={round}
            value={round}
        >
            {round}
        </option>
    ))}
</select>

                </div>

               <div className="flex gap-4">

    <button
        type="submit"
        className="flex-1 bg-green-600 text-white py-3 rounded-lg"
    >
        Create Match
    </button>

    <button
        type="button"
        onClick={() => navigate(-1)}
        className="flex-1 bg-gray-500 text-white py-3 rounded-lg"
    >
        Cancel
    </button>

</div>

            </form>

        </div>

    );

}

export default CreateMatch;