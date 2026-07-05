import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTournamentById } from "../../services/tournamentService";

function TournamentDetails() {
    const { id } = useParams();

    const [tournament, setTournament] = useState(null);

    useEffect(() => {
        const fetchTournament = async () => {
            try {
                const data = await getTournamentById(id);
                setTournament(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchTournament();
    }, [id]);

    if (!tournament) {
        return <h2>Loading...</h2>;
    }

    return (
        <div className="max-w-5xl mx-auto">

            <img
                src={tournament.banner}
                alt={tournament.name}
                className="w-full h-80 object-cover rounded-xl"
            />

            <div className="bg-white shadow-lg rounded-xl p-8 mt-6">

                <h1 className="text-4xl font-bold">
                    {tournament.name}
                </h1>

                <p className="text-gray-600 mt-4">
                    {tournament.description}
                </p>

                <div className="grid grid-cols-2 gap-6 mt-8">

                    <div>
                        <strong>Location</strong>
                        <p>{tournament.location}</p>
                    </div>

                    <div>
                        <strong>Tournament Type</strong>
                        <p>{tournament.tournamentType}</p>
                    </div>

                    <div>
                        <strong>Maximum Teams</strong>
                        <p>{tournament.maxTeams}</p>
                    </div>

                    <div>
                        <strong>Start Date</strong>
                        <p>
                            {new Date(
                                tournament.startDate
                            ).toLocaleDateString()}
                        </p>
                    </div>

                    <div>
                        <strong>End Date</strong>
                        <p>
                            {new Date(
                                tournament.endDate
                            ).toLocaleDateString()}
                        </p>
                    </div>

                    <div>
                        <strong>Registration Deadline</strong>
                        <p>
                            {new Date(
                                tournament.registrationDeadline
                            ).toLocaleDateString()}
                        </p>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default TournamentDetails;