import React, { Component } from "react";
import WeatherCard from "./WeatherCard";
import ClipLoader from "react-spinners/ClipLoader";

const api = {
  key: process.env.REACT_APP_API_KEY,
  baseUrl: process.env.REACT_APP_API_URL
};

export default class WeatherContainer extends Component {
  state = {
    data: [],
    iconCode: "",
    selectedDay: 0
  };

  componentDidMount = () => {
    this.getWeather();
  };

  getWeather = async () => {
    const res = await fetch(
      `${api.baseUrl}forecast?q=Copenhagen&units=metric&cnt=5&appid=${api.key}`
    );
    const data = await res.json();
    this.setState({
      data: data.list,
      iconCode: data.list[this.state.selectedDay].weather[0].icon
    });
  };

  render() {
    const { data } = this.state;
    if (data.length > 0) {
      return (
        <div style={{ textAlign: "center" }}>
          <h2>Later today</h2>
          <div className="weather-card-container">
            {this.state.data.map((el, index) => {
              return (
                <WeatherCard
                  key={index}
                  iconId={this.state.iconCode}
                  timeOfDay={
                    data[index].dt_txt.split(" ")[1].split(":")[0] +
                    ":" +
                    data[index].dt_txt.split(" ")[1].split(":")[1]
                  }
                  temperatureDeg={Math.ceil(data[index].main.temp)}
                  temperatureFeel={Math.floor(data[index].main.feels_like)}
                  humidity={data[index].main.humidity}
                  wind={data[index].wind.speed}
                  description={data[index].weather[0].main}
                />
              );
            })}
          </div>
        </div>
      );
    } else {
      return (
        <div className="weather-loading">
          <ClipLoader size={50} />
        </div>
      );
    }
  }
}
