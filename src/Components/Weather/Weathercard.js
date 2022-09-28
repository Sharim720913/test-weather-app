import React, { useEffect } from "react";

const Weathercard = ({ tempInfo }) => {
  const [Weatherstate, setWeatherstate] = React.useState("");
  const {
    temp,
    humidity,
    pressure,
    weathermood,
    name,
    speed,
    country,
    sunset,
  } = tempInfo;

  useEffect(() => {
    if (weathermood) {
      switch (weathermood) {
        case "Clouds":
          setWeatherstate("wi-day-cloudy");
          break;

        case "Haze":
          setWeatherstate("wi-fog");
          break;

        case "Clear":
          setWeatherstate("wi-day-sunny");
          break;

        default:
          setWeatherstate("wi-day-sunny");
          break;
      }
    }
  }, [weathermood]);

  //   converting the seconds into time
  let sec = sunset;
  let date = new Date(sec * 1000);
  let timeStr = `${date.getHours()}:${date.getMinutes()}`;

  return (
    <>
      <article className="widget">
        <div className="weatherIcon">
          <i className={`wi ${Weatherstate}`}></i>
        </div>
        <div className="weatherInfo">
          <div className="temperature">
            <span> {temp}&deg;</span>
          </div>
          <div className="description">
            <div className="weatherCondition"></div>
            <div className="place">
              {name} , {country}
            </div>
          </div>
        </div>
        <div className="date">{new Date().toLocaleString()}</div>

        {/* {our 4 columen section} */}
        <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-sunset"}></i>
              </p>
              <p className="extra-info-leftside">
                {timeStr} <br />
                Sunset
              </p>
            </div>
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-humidity"}></i>
              </p>
              <p className="extra-info-leftside">
                {humidity} <br />
                Humidity
              </p>
            </div>
          </div>

          <div className="weather-extra-info">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-rain"}></i>
              </p>
              <p className="extra-info-leftside">
                {pressure} <br />
                Pressure
              </p>
            </div>
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-strong-wind"}></i>
              </p>
              <p className="extra-info-leftside">
                {speed} <br />
                Speeds
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default Weathercard;
