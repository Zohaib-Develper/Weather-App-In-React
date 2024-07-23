import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import "./Search.css";
import { useEffect, useState } from "react";

export default function BasicTextFields({ setWeatherInfo, setIsFound }) {
  let Weather_URL = "https://api.openweathermap.org/data/2.5/weather";
  let API_KEY = `f60ec41cd19d89e92aa98d03b1a1a292`;
  let [city, setCity] = useState("Lahore");

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const getWhetherInfo = async () => {
    try {
      let reponse = await fetch(
        `${Weather_URL}?q=${city}&appid=${API_KEY}&&units=metric`
      );
      const jsonRespons = await reponse.json();
      setWeatherInfo({
        city: city,
        temperature: jsonRespons.main.temp,
        humidity: jsonRespons.main.humidity,
        feels_like: jsonRespons.main.feels_like,
        temp_min: jsonRespons.main.temp_min,
        temp_max: jsonRespons.main.temp_max,
        wind_speed: jsonRespons.wind.speed,
        description: jsonRespons.weather[0].description,
      });
    } catch (err) {
      setIsFound(false);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await getWhetherInfo();
    setCity("");
  };

  //For initial Search
  useEffect(() => {
    getWhetherInfo();
    setCity("");
  }, []);
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>The Whether Wizard</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          id="filled-basic"
          label="Search"
          variant="filled"
          name="city"
          value={city}
          onChange={handleChange}
          fullWidth
          sx={{
            width: {
              xs: "90%", // 100% width on extra-small screens
              md: "27%", // 50% width on medium screens and larger
            },
          }}
        />
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </form>
    </div>
  );
}
