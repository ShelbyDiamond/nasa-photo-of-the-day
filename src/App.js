import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Title from "./title";
import Date from "./date";
import Media from "./media";
import Description from "./description";

function App() {
  const [NasaInfo, setNasaInfo] = useState([]);

  const fetchData = () => {
    axios

      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then(response => {
        setNasaInfo(response.data);
      })
      .catch(error => console.log(error));
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="App">
      <Title NasaInfo={NasaInfo} />
      <Date NasaInfo={NasaInfo} />
      <Media NasaInfo={NasaInfo} />
      <Description NasaInfo={NasaInfo} />
    </div>
  );
}

export default App;
