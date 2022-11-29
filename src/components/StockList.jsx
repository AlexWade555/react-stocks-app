import { useState, useEffect } from "react"
import finnHub from "../apis/finnHub"

export const StockList = () => {
  const [watchlist, setWatchList] = useState(["GOOGL", "MSFT", "AMZN"])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await finnHub.get("/quote?symbol=MSFT&token=cduq4oaad3i2h5f4nrfgcduq4oaad3i2h5f4nrg0")
        console.log(response)
      } catch (error) {

      }
    }
    fetchData()
  }, [])

  return <div>StockList</div>
}
