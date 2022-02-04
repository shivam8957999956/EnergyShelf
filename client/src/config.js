import axios from "axios";
export const axiosInstance = axios.create({
  baseURL: "https://energy-shelf.herokuapp.com/api/",
});
