import React from "react";

const WeatherDisplay = ({ weatherData }) => {
  const temperatureStyle = {
    color: weatherData.temperature > 20 ? "red" : "blue"
  };

  return (
    <div>
      <p>
        Temperature:
        <span style={temperatureStyle}>
          {" "}{weatherData.temperature}°C
        </span>
      </p>

      <p>Condition: {weatherData.conditions}</p>
    </div>
  );
};

export default WeatherDisplay;
