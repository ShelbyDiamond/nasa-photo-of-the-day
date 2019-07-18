import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Title from "./title";
import Date from "./date";
import Description from "./description";

function App() {
  const [NasaInfo, setNasaInfo] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=fec56teA2CxIM9FfEbFiTCdtLU9gNkL1j1UNz8Ti"
      )
      .then(response => {
        console.log(response);
        setNasaInfo(response.data);
      })
      .catch(error => {
        return setNasaInfo("error", error);
      });
  }, []);

  return (
    <div className="App">
      <div>
        <Title NasaTitle={NasaInfo} />
      </div>
      <div>
        <Date NasaDate={NasaInfo} />
      </div>
      <div>
        <Description NasaInfo={NasaInfo} />
      </div>
    </div>
  );
}

export default App;
