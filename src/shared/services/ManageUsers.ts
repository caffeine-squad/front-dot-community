import { api } from "./api";

export const GetAllUsers = async () => {
    return await api.get("/user")	
}