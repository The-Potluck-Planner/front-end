import axios from "axios";
export const BASE_URL = 'https://thepotluckplanner.herokuapp.com/'

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
  return axios.create({
    headers: {
      Authorization: token
    },
    baseURL: BASE_URL
  });
};
