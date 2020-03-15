import React from "react";
import WeatherContainer from "./../components/WeatherContainer";
import HeaderApp from "./../components/HeaderApp";

export default function TheApp() {
  return (
    <div className="container">
      <HeaderApp />
      <WeatherContainer />
    </div>
  );
}
