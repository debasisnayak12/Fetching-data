import { useEffect, useState } from "react";
import TableRow from "./Components/TableRow";
import axios from "axios";
import "./App.scss";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(()=>{
    fetchData();
  },[])

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
      );
      // console.log(response.data)
      setData(response.data);
    } catch (error) {
      console.log("Error fetching data: ", error);
    }
  }

  return (
        <div className="container">
          <h1 className="heading">Cryto Currency Chart</h1>
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Image</th>
                <th>Symbol</th>
                <th>Current Price</th>
                <th>Total Volumn</th>
              </tr>
            </thead>
            <tbody>
             {
              data.map((item,index)=>(
                  <TableRow data={item} key={index}/>
              ))
             }
            </tbody>
          </table>
        </div>
  )
};

export default App;
