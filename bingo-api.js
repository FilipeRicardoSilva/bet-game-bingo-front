import axios from "axios";

const bingoApi = axios.create({
    baseURL: "http://localhost:8080",
  });
export default bingoApi;
