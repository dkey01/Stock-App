import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css';
import { StockDetailPage } from "./pages/stockdetailpage";
import { StockOverviewPage } from "./pages/stockoverviewpage";
import { WatchListContextProvider } from "./Context/WatchListContext";

const App = () => {
  return (
   <main className="container">
    <WatchListContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<StockOverviewPage />}/>
          <Route path="/detail/:symbol" element={<StockDetailPage />}/> 
        </Routes>
      </BrowserRouter>
    </WatchListContextProvider>
   </main>
  );
}

export default App;
