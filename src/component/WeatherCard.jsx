import React, { useState, useEffect } from "react";

const WeatherCard = ({ tempInfo }) => {
  const [weatherState, setWeatherrState] = useState("");
  const {
    temp,
    humidity,
    pressure,
    weathermood,
    name,
    speed,
    country,
    sunset,
    sunrise,
  } = tempInfo;

  useEffect(() => {
    if (weathermood) {
      switch (weathermood) {
        case "Clouds":
          setWeatherrState("wi-day-cloudy");
          break;

        case "Haze":
          setWeatherrState("wi-day-haze");
          break;
        case "Clear":
          setWeatherrState("wi-day-sunny");
          break;
        case "Smoke":
          setWeatherrState("wi-smoke");
          break;
        default:
          setWeatherrState("wi-day-sunny");
          break;
      }
    }
  }, [weathermood]);

  //   converting the second into time
  let sec = sunset;
  let date = new Date(sec * 1000);
  let timeStr = `${date.getHours()} : ${date.getMinutes()}`;
  //
  //let a = temp;
  //let b = Math.round(a);
  // let tempStr = `${b}°C`;
  const timerunning = () => {
    setInterval(() => {
      let b = new Date().toLocaleTimeString();
      document.getElementById("time").innerHTML = b;
    }, 1000);
  };
  timerunning();

  if (!tempInfo) {
    return alert("name");
  }
  return (
    <>
      <article className="widget">
        <div className="weatherIcon">
          <i
            className={`wi ${weatherState} animate__animated animate__bounceInDown`}
          ></i>
        </div>

        <div className="weatherInfo">
          <div className="temperature">
            <span className="">{temp}°C</span>
          </div>

          <div className="description">
            <div className="weatherCondition animate__animated animate__lightSpeedInRight">
              {weathermood}
            </div>
            <div className="place animate__animated animate__lightSpeedInRight">
              {name}, {country}
            </div>
          </div>
        </div>

        <div className="date animate__animated animate__lightSpeedInRight">
          <span id="time"></span>
          <br />
          {new Date().toLocaleDateString()}
        </div>

        {/* our 4column section  */}
        <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                <i
                  className={
                    "wi wi-sunset animate__animated animate__slideInUp"
                  }
                ></i>
              </p>
              <p className="extra-info-leftside animate__animated animate__slideInUp">
                {timeStr} PM <br />
                Sunset
              </p>
            </div>

            <div className="two-sided-section">
              <p>
                <i
                  className={
                    "wi wi-humidity animate__animated animate__slideInUp"
                  }
                ></i>
              </p>
              <p className="extra-info-leftside animate__animated animate__slideInUp">
                {humidity} <br />
                Humidity
              </p>
            </div>
          </div>

          <div className="weather-extra-info">
            <div className="two-sided-section">
              <p>
                <i
                  className={"wi wi-rain animate__animated animate__slideInUp"}
                ></i>
              </p>
              <p className="extra-info-leftside animate__animated animate__slideInUp">
                {pressure} hpa <br />
                Pressure
              </p>
            </div>

            <div className="two-sided-section">
              <p>
                <i
                  className={
                    "wi wi-strong-wind animate__animated animate__slideInUp"
                  }
                ></i>
              </p>
              <p className="extra-info-leftside animate__animated animate__slideInUp">
                {speed} &nbsp;m/s
                <br />
                Speed
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default WeatherCard;
