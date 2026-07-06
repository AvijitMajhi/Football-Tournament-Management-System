import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getStandings } from "../../services/tournamentService";

function Standings() {

    const { tournamentId } = useParams();

    const [standings, setStandings] = useState([]);

    useEffect(() => {

        const fetchStandings = async () => {

            try {

                const data = await getStandings(tournamentId);

                setStandings(data);

            } catch (error) {

                console.error(error);

            }

        };

        fetchStandings();

    }, [tournamentId]);

    return (

        <div className="bg-white rounded-xl shadow-md p-8">

            <h1 className="text-3xl font-bold mb-8">
                League Standings
            </h1>

            <div className="overflow-x-auto">

                <table className="w-full border-collapse">

                    <thead>

                        <tr className="bg-green-700 text-white">

                            <th className="p-3">Pos</th>
                            <th className="p-3 text-left">Team</th>
                            <th className="p-3">P</th>
                            <th className="p-3">W</th>
                            <th className="p-3">D</th>
                            <th className="p-3">L</th>
                            <th className="p-3">GF</th>
                            <th className="p-3">GA</th>
                            <th className="p-3">GD</th>
                            <th className="p-3">Pts</th>

                        </tr>

                    </thead>

                    <tbody>

                        {standings.map((team) => (

                            <tr
                                key={team.teamId}
                                className="border-b hover:bg-gray-50"
                            >

                                <td className="text-center p-3 font-semibold">
                                    {team.position}
                                </td>

                                <td className="p-3 font-medium">
                                    {team.teamName}
                                </td>

                                <td className="text-center">{team.played}</td>
                                <td className="text-center">{team.won}</td>
                                <td className="text-center">{team.draw}</td>
                                <td className="text-center">{team.lost}</td>
                                <td className="text-center">{team.goalsFor}</td>
                                <td className="text-center">{team.goalsAgainst}</td>
                                <td className="text-center">{team.goalDifference}</td>

                                <td className="text-center font-bold text-green-700">
                                    {team.points}
                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </div>

    );

}

export default Standings;