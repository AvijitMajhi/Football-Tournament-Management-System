import api from "./api";

export const getAllTeams = async () => {
    const response = await api.get("/teams");
    return response.data.data;
};

export const getTeamById = async (id) => {
    const response = await api.get(`/teams/${id}`);
    return response.data.data;
};

export const createTeam = async (formData) => {
    const response = await api.post(
        "/teams",
        formData,
        {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }
    );

    return response.data.data;
};

export const updateTeam = async (id, formData) => {
    const response = await api.patch(
        `/teams/${id}`,
        formData,
        {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }
    );

    return response.data.data;
};

export const deleteTeam = async (id) => {
    const response = await api.delete(`/teams/${id}`);
    return response.data;
};