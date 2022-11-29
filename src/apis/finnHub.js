import axios from "axios";
import { useParams } from "react-router-dom";

const TOKEN = "cduq4oaad3i2h5f4nrfgcduq4oaad3i2h5f4nrg0"

export default axios.create({
  baseURL: "https://finnhub.io/api/v1",
  params: {
    token: TOKEN
  }
})
