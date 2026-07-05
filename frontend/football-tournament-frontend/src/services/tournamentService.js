import api from "./api";

export const getAllTournaments = async () => {
    const response = await api.get("/tournaments");
    return response.data.data;
};

export const getTournamentById = async (id) => {
    const response = await api.get(`/tournaments/${id}`);
    return response.data.data;
};

export const createTournament = async (formData) => {
    const response = await api.post("/tournaments", formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });

    return response.data.data;
};

export const updateTournament = async (id, formData) => {
    const response = await api.patch(
        `/tournaments/${id}`,
        formData,
        {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }
    );

    return response.data.data;
};

export const deleteTournament = async (id) => {
    const response = await api.delete(`/tournaments/${id}`);
    return response.data;
};