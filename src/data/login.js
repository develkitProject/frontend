import { axiosInstance } from "./axiosInstance";

export const loginApi = async ({username, password}) => {
    const data = {username, password}
    const response = axiosInstance.post('/api/members/login', data)
    return response;
}