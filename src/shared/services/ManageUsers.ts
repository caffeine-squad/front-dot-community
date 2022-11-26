import { api } from "./api";

export const GetAllUsers = async () => {
    const users = await api.get(`/user/`)
    .then((res) => res.data)
    .catch((e) => {
        console.log(e);
    });

    return users;	
}