import React, { Component } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const api = {
  key: process.env.REACT_APP_API_KEY,
  baseUrl: process.env.REACT_APP_API_URL
};

export default class HeaderApp extends Component {
  state = {
    data: null,
    time: new Date(),
    iconId: ""
  };
  componentDidMount = () => {
    this.getCurrentWeather();
  };

  getCurrentWeather = async () => {
    const res = await fetch(
      `${api.baseUrl}weather?q=Copenhagen&units=metric&appid=${api.key}`
    );
    const data = await res.json();
    this.setState({
      data: data,
      iconId: data.weather[0].icon
    });
  };

  render() {
    const top = (
      <div className="location-right">
        <h1>Copenhagen,DK</h1>
        <h3 className="time">
          Local time:{" "}
          <span>
            {this.state.time.toLocaleTimeString().split(":")[0]}
            <span className="blink-effect">:</span>
            {this.state.time.toLocaleTimeString().split(":")[1]}
          </span>
        </h3>
        <h4 className="date">
          Date: <span>{this.state.time.toLocaleDateString()}</span>
        </h4>
      </div>
    );

    const { data } = this.state;
    if (data) {
      return (
        <div className="location-box">
          {top}
          <div className="location-left">
            <h3>
              Now: <span>{Math.ceil(data.main.temp)}°C</span>
            </h3>
            <h4>
              Feels like:<span> {Math.floor(data.main.feels_like)}°C</span>
            </h4>
            <img
              src={`http://openweathermap.org/img/wn/${this.state.iconId}@2x.png`}
              alt=""
            />
          </div>
        </div>
      );
    } else {
      return (
        <div className="location-box">
          {top}
          <div className="location-left weather-load">
            <ClipLoader size={50} />
          </div>
        </div>
      );
    }
  }
}
