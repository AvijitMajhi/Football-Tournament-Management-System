import { useEffect, useState } from "react";

import TournamentCard from "../../components/tournament/TournamentCard";
import { getAllTournaments } from "../../services/tournamentService";
import { useNavigate } from "react-router-dom";
function TournamentList() {

    const [tournaments, setTournaments] = useState([]);
    const navigate = useNavigate();
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

    return (
        <div>

            <h1 className="text-3xl font-bold mb-8">
                Tournaments
            </h1>
<div className="mb-8">
    <button
        onClick={() => navigate("/tournaments/create")}
        className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg"
    >
        + Create Tournament
    </button>
</div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                {tournaments.map((tournament) => (
                    <TournamentCard
                        key={tournament._id}
                        tournament={tournament}
                    />
                ))}

            </div>

        </div>
    );
}

export default TournamentList;