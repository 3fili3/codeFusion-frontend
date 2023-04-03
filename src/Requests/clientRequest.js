import axios from "axios";
import { useToastStore } from "../store/toastStore.js";
import { useAuthStore } from "../store/authStore.js";


const students = "users";

export const getUserReq = async (uuid) => {
    let err;

    const { data } = await axios({
        method  : "get",
        url     : `${import.meta.env.VITE_SERVER}${students}/${uuid}`,
        headers : {
            authorization: `Bearer ${useAuthStore().authToken}`
        }
    })
        .catch((error) => err = error);

    if (err) {
        useToastStore().Activated({ text: err.message, title: "Usuarios" });

        throw new Error(err.message);
    }

    return data;
};

export const createUserReq = async ({
    name,
    email,
    password
}) => {
    let err;

    const { data } = await axios({
        method : "post",
        url    : `${import.meta.env.VITE_SERVER}${students}/`,
        data   : {
            userName: name,
            email,
            password
        }
    })
        .catch((error) => err = error);

    if (err) {
        useToastStore().Activated({ text: err.message, title: "Usuarios" });

        throw new Error(err.message);
    }

    return data;
};

export const logInUserReq = async ({ email, password }) => {
    let err;

    const { data } = await axios({
        method : "post",
        url    : `${import.meta.env.VITE_SERVER}${students}/logIn`,
        data   : {
            email,
            password
        }
    })
        .catch((error) => err = error);

    if (err) {
        useToastStore().Activated({ text: err.message, title: "Usuarios" });

        throw new Error(err.message);
    }

    return data;
};

export const updateUserReq = async (dataUser) => {
    let err;

    const { data } = await axios({
        method : "put",
        url    : `${import.meta.env.VITE_SERVER}${students}/`,
        data   : dataUser
    })
        .catch((error) => err = error);

    if (err) {
        useToastStore().Activated({ text: err.message, title: "Usuarios" });

        throw new Error(err.message);
    }

    return data;
};