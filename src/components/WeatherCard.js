import React from "react";

const WeatherCard = props => {
  return (
    <div className="weather-card-box">
      <h3>
        <span>{props.temperatureDeg}°C</span> at <span>{props.timeOfDay}</span>
      </h3>
      <img
        src={`http://openweathermap.org/img/wn/${props.iconId}@2x.png`}
        alt=""
      />
      <h4>
        Feels like:<span> {props.temperatureFeel}°C</span>
      </h4>
      <h4>
        Humidity:<span> {props.humidity}%</span>
      </h4>
      <h4>
        Wind: <span>{props.wind}m/s</span>
      </h4>
      <h4>
        Sky: <span>{props.description}</span>
      </h4>
    </div>
  );
};

export default WeatherCard;
