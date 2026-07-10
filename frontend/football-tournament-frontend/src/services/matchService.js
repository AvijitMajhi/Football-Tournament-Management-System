import api from "./api";

export const generateFixtures = async (tournamentId) => {
    const response = await api.post(
        "/matches/generate-fixtures",
        {
            tournamentId,
        }
    );

    return response.data.data;
};

export const getAllMatches = async () => {
    const response = await api.get("/matches");
    return response.data.data;
};

export const getMatchById = async (id) => {
    const response = await api.get(`/matches/${id}`);
    return response.data.data;
};

export const updateMatchResult = async (
    id,
    homeScore,
    awayScore
) => {
    const response = await api.patch(
        `/matches/${id}/result`,
        {
            homeScore,
            awayScore,
        }
    );

    return response.data.data;
};

export const deleteMatch = async (id) => {
    const response = await api.delete(`/matches/${id}`);
    return response.data.data;
};


export const createMatch = async (matchData) => {
    const response = await api.post("/matches", matchData);
    return response.data.data;
};