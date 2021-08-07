import axios from "axios";

const url =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3333"
    : "https://growthtech-backend-challenge.herokuapp.com";

const api = axios.create({
  baseURL: "http://localhost:3333",
});

export default api;
