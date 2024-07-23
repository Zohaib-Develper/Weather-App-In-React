import { useState } from "react";
import Search from "./Search.jsx";
import WhetherInfo from "./WeatherInfo.jsx";

export default function Whether() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Lahore",
    temperature: 35,
    humidity: 66,
    feels_like: 38.9,
    temp_min: 33,
    temp_max: 36,
    wind_speed: 2.57,
    description: "Smoke",
  });
  const [isFound, setIsFound] = useState(true);

  return (
    <div>
      <Search setWeatherInfo={setWeatherInfo} setIsFound={setIsFound} />
      {isFound ? (
        <WhetherInfo info={weatherInfo} setIsFound={setIsFound} />
      ) : (
        <h1 style={{ textAlign: "center" }}>No record Found</h1>
      )}
    </div>
  );
}
