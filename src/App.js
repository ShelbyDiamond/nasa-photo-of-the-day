import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

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
      <title NasaInfo={NasaInfo} />
      <date NasaInfo={NasaInfo} />
      <media NasaInfo={NasaInfo} />
      <description NasaInfo={NasaInfo} />
    </div>
  );
}

export default App;
