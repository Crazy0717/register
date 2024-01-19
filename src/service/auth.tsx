import axios from "axios";

const BASE_URL: string = "http://localhost:3000/api";

interface userTypes {
  username?: string;
  email?: string;
  password?: string;
}

const authServiceData = {
  registerUser: async (user: userTypes) => {
    const { data } = await axios.post(`${BASE_URL}/users`, { user });
    return data;
  },
  
  loginUser: async (user: userTypes) => {
    const { data } = await axios.post(`${BASE_URL}/users/login`, { user });
    return data;
  },
};

export default authServiceData;
