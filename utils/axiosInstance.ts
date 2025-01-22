import axios, { AxiosInstance } from "axios";

// Định nghĩa interface cho User
export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

// Tạo một instance của axios
const axiosInstance: AxiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    "Content-Type": "application/json"
  },
  timeout: 10000
});

export default axiosInstance;
