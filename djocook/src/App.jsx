import { useEffect, useState } from "react";
import Card from "./components/card";
import axios from "axios";


function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://thesimpsonsquoteapi.glitch.me/quotes?count=30")
      .then((res) => setData(res.data));
  }, []);

  return (
    <div className="container">
      <h1> Simpson Family !!!!</h1>
      <div className="search-bar">
 
      <input type="text" />
      </div>
    
      <ul>
        {data.map((simpson, index) => (
          <Card key={index} simpson={simpson} />
        ))}
      </ul>
    </div>
  );
}

export default App;
