import axios from "axios";
import { useParams } from "react-router-dom";

const TOKEN = "ch88fhpr01qhapm5lrkgch88fhpr01qhapm5lrl0"

export default axios.create({
  baseURL: "https://finnhub.io/api/v1",
  params: {
    token: TOKEN
  }
})
