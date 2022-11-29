import { useState, useEffect } from "react"
import finnHub from "../apis/finnHub"

export const StockList = () => {
  const [stock, setStock] = useState()
  const [watchlist, setWatchList] = useState(["GOOGL", "MSFT", "AMZN"])

  useEffect(() => {
    let isMounted = true
    const fetchData = async () => {
      try {
        const responses = Promise.all(finnHub.get("/quote", {
          params: {
            symbol: "GOOGL"
          }
        }), finnHub.get("/quote", {
          params: {
            symbol: "MSFT"
          }
        }), finnHub.get("/quote", {
          params: {
            symbol: "AMZN"
          }
        }))
        console.log(responses)
        if (isMounted) {
          setStock(responses.data)
        }
      } catch (error) {

      }
    }
    fetchData()

    return () => (isMounted = false)
  }, [])

  return <div>StockList</div>
}
