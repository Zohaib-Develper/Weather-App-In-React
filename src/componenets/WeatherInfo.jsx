import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function WhetherInfo({ info }) {
  const RAIN_URL =
    "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const HOT_URL =
    "https://images.unsplash.com/photo-1706521487349-1bdbbde15874?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const COLD_URL =
    "https://plus.unsplash.com/premium_photo-1710248799611-96aa6db855b9?q=80&w=1812&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}
    >
      <Card
        sx={{
          width: {
            xs: "100%", // 100% width on extra-small screens
            md: "35%", // 50% width on medium screens and larger
          },
        }}
      >
        <CardMedia
          sx={{ height: 200 }}
          image={
            info.humidity > 80
              ? RAIN_URL
              : info.temperature > 22
              ? HOT_URL
              : COLD_URL
          }
          title="green iguana"
        />
        <CardContent>
          <div style={{ textAlign: "center" }}>
            <h1>{info.city.toUpperCase()}</h1>
            <h1>{info.temperature}&deg;C</h1>
          </div>
          Humidity: {info.humidity}
          <br /> <br />
          Mininum Temperature: {info.temp_min} <br /> <br />
          Maximum Temperature: {info.temp_max} <br /> <br />
          Wind Speed: {info.wind_speed} <br /> <br />
          Overall the weather can be described as <b>{info.description} </b>
          and temperature feels like <b>{info.feels_like}</b>
        </CardContent>
      </Card>
    </div>
  );
}
