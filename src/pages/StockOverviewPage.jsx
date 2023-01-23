import {AutoComplete} from '../components/AutoComplete'
import { StockList } from '../components/StockList'
import logo from '../Logo.svg'

export const StockOverviewPage = () => {
  return <div>
    <img scr={logo} alt="logo"/>
    <AutoComplete/>
    <StockList/>
  </div>
}
