import api from "../..";
import { ENDPOINT } from "../../index";

const getAllUsers = async () => {
    try {
        const allUsers = await api.get(ENDPOINT.USERS);

        return allUsers.data
    } catch (error) {
        throw error
    }
}
const getOneUsers = async (id) => {
    try {
        const user = await api.get(`${ENDPOINT.USERS}/${id}`);

        return user.data.data
    } catch (error) {
        throw error
    }
}
const updateOneUser = async ({id, form}) => {
    try {
        const user = await api.put(`${ENDPOINT.USERS}/${id}`, form);

        return user.data
    } catch (error) {
        throw error
    }
}
const resetPassword = async ({id, form}) => {
    try {
        const user = await api.put(`${ENDPOINT.USERS}/admin/reset-password-servicer/${id}`, form);
        console.log("user >> ", user)
        return user.data
    } catch (error) {
        throw error
    }
}
const createOneUser = async ( form) => {
    try {
        const user = await api.post(`${ENDPOINT.USERS}/servicer/auth/register`, form);

        return user.data
    } catch (error) {
        throw error
    }
}




const changeStatusUser = async (id) => {
    try {
        const response = await api.put(`${ENDPOINT.USERS}/change-status-user/${id}`)
        return response.data
    } catch (error) {
        throw error
    }
}

const deleteUser = async (id) => {
    try {
        const deletedUser = await api.delete(`${ENDPOINT.USERS}/${id}`)
        return deletedUser.data
    } catch (error) {
        throw error
    }
}

export {
    getAllUsers,
    changeStatusUser,
    deleteUser,
    getOneUsers,
    updateOneUser,
    createOneUser,
    resetPassword
}