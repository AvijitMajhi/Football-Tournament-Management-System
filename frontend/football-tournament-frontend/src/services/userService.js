import api from "./api";

export const getCurrentUser = async () => {

    const response = await api.get("/users/profile");

    return response.data.data;

};
export const updateProfile = async (data) => {

    const response = await api.patch(
        "/users/update-profile",
        data
    );

    return response.data.data;

};
export const changePassword = async (data) => {

    const response = await api.patch(

        "/users/change-password",

        data

    );

    return response.data.data;

};
