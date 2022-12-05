import axios from "axios";

const TOKEN = "cduq4oaad3i2h5f4nrfgcduq4oaad3i2h5f4nrg0"

export default axios.create({
  baseURL: "https://finnhub.io/api/v1",
  params: {
    token: TOKEN
  }
})
