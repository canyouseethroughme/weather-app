import React from "react";

export default function About() {
  return (
    <div className="about">
      <h3>
        This is a weather app that shows the current weather and time in
        Copenhagen, Denmark.
      </h3>
      <h3>The app is built in ReactJS with React Router and FetchAPI.</h3>
      <h3>
        The data is fetched asyncronous from{" "}
        <a
          href="https://openweathermap.org/current"
          target="_blank"
          rel="noopener noreferrer"
        >
          OpenWeatherMap API
        </a>
        .
      </h3>
    </div>
  );
}
