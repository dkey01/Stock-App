import { AutoComplete } from "../components/AutoComplete"
import { StockList } from "../components/StockList"
import image from "../Images/image.png"


export const StockOverviewPage = () => {
    return <div>
        <div className="text-center">
            <img src={image} alt=""/>
            <h2 style={{fontWeight: "bold", fontFamily: "serif"}}>Trading Keys</h2>
        </div>
        <AutoComplete />
        <StockList />
    </div>
}

