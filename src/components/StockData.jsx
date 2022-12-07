import { useState, useEffect } from "react"
import finnHub from "../apis/finnHub"

export const StockData = ({symbol}) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await finnHub.get("/stock/profile2", {
          params: {
            symbol
          }
        })
        console.log(response)
      } catch (error) {

      }
    }
    fetchData()
  }, [symbol])
  return <h2>Stock Data</h2>
}
