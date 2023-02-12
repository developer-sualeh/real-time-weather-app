import React, { useState, useEffect } from "react";
import "./style.css";
import WeatherCard from "./WeatherCard";

const Weather = () => {
  const [searchValue, setSearchValue] = useState("kanpur");
  const [tempInfo, setTempInfo] = useState({});

  const getWeatherInfo = async () => {
    if (searchValue === "") {
      return alert("Enter the city name");
    }

    try {
      let Url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=${process.env.REACT_APP_API_KEY}`;

      const res = await fetch(Url);
      const data = await res.json();
      if (!data.name) {
        return alert("city not found. kindly check your city name");
      }
      console.log(data);

      const { temp, humidity, pressure } = data.main;
      const { main: weathermood } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset, sunrise } = data.sys;

      const myWeatherInfo = {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset,
        sunrise,
      };

      setTempInfo(myWeatherInfo);
      setSearchValue("");
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getWeatherInfo();
  }, []);

  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="search..."
            autoFocus
            id="search"
            className="searchTerm"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />

          <button
            className="searchButton"
            type="button"
            onClick={getWeatherInfo}
          >
            Search
          </button>
        </div>
      </div>

      {/* weather card section start */}

      <WeatherCard tempInfo={tempInfo} />
      {/* weather card section end */}
    </>
  );
};

export default Weather;
