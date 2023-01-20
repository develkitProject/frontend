import { axiosInstance } from './axiosInstance';

interface UserData {
  username: string;
  password: string;
}

export const loginApi = async ({ username, password }: UserData) => {
  const data = { username, password };
  const response = axiosInstance.post('/api/members/login', data);
  return response;
};
