import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { updateMatchResult } from "../../services/matchService";

function UpdateMatchResult() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [homeScore, setHomeScore] = useState(0);
    const [awayScore, setAwayScore] = useState(0);

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await updateMatchResult(
                id,
                Number(homeScore),
                Number(awayScore)
            );

            alert("Result updated successfully!");

            navigate("/matches");

        } catch (error) {

            console.error(error);

            alert(
                error.response?.data?.message ||
                "Failed to update result"
            );

        }

    };

    return (

        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md p-8">

            <h1 className="text-3xl font-bold mb-8 text-center">
                Enter Match Result
            </h1>

            <form
                onSubmit={handleSubmit}
                className="space-y-6"
            >

                <div>

                    <label className="block font-semibold mb-2">
                        Home Team Goals
                    </label>

                    <input
                        type="number"
                        min="0"
                        value={homeScore}
                        onChange={(e) =>
                            setHomeScore(e.target.value)
                        }
                        className="w-full border rounded-lg p-3"
                    />

                </div>

                <div>

                    <label className="block font-semibold mb-2">
                        Away Team Goals
                    </label>

                    <input
                        type="number"
                        min="0"
                        value={awayScore}
                        onChange={(e) =>
                            setAwayScore(e.target.value)
                        }
                        className="w-full border rounded-lg p-3"
                    />

                </div>

                <button
                    type="submit"
                    className="w-full bg-green-700 hover:bg-green-800 text-white py-3 rounded-lg"
                >
                    Save Result
                </button>

            </form>

        </div>

    );

}

export default UpdateMatchResult;