import {AutoComplete} from '../components/AutoComplete'
import { StockList } from '../components/StockList'
import {ReactComponent as Logo} from '../Logo.svg'

export const StockOverviewPage = () => {
  return <div>
    <Logo />
    <AutoComplete/>
    <StockList/>
  </div>
}
