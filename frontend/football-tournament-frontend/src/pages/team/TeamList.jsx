import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import TeamCard from "../../components/team/TeamCard";
import { getAllTeams } from "../../services/teamService";

function TeamList() {

    const navigate = useNavigate();

    const [teams, setTeams] = useState([]);

    useEffect(() => {

        const fetchTeams = async () => {
            try {
                const data = await getAllTeams();
                setTeams(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchTeams();

    }, []);

    return (
        <div>

            <div className="flex justify-between items-center mb-8">

                <h1 className="text-3xl font-bold">
                    Teams
                </h1>

                <button
                    onClick={() => navigate("/teams/create")}
                    className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg"
                >
                    + Create Team
                </button>

            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                {teams.map((team) => (
                    <TeamCard
                        key={team._id}
                        team={team}
                    />
                ))}

            </div>

        </div>
    );
}

export default TeamList;