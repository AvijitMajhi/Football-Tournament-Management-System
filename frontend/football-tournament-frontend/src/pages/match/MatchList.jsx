import { useEffect, useState } from "react";
import { getAllMatches } from "../../services/matchService";
import MatchCard from "../../components/match/MatchCard";

function MatchList() {
    const [matches, setMatches] = useState([]);

    useEffect(() => {
        const fetchMatches = async () => {
            try {
                const data = await getAllMatches();
                setMatches(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchMatches();
    }, []);

    if (matches.length === 0) {
        return (
            <div className="text-center mt-20">
                <h2 className="text-2xl font-semibold">
                    No Matches Found
                </h2>

                <p className="text-gray-500 mt-3">
                    Generate fixtures to create matches.
                </p>
            </div>
        );
    }

    return (
        <div>

            <h1 className="text-3xl font-bold mb-8">
                Matches
            </h1>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

                {matches.map((match) => (
                    <MatchCard
                        key={match._id}
                        match={match}
                    />
                ))}

            </div>

        </div>
    );
}

export default MatchList;