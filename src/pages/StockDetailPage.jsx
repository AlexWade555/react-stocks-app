import { useParams } from "react-router-dom"
import { useEffect } from "react"
import axios from "axios"
import finnHub from "../apis/finnHub"

export const StockDetailPage = () => {
  const {symbol} = useParams()
  useEffect(() => {
    const fetchData = () => {

    }
  })

  return <div>StockDetailPage {symbol}</div>
}
