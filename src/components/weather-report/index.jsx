import "./index.css";
import Cloud from "../../assets/icons/clouds.png";
import Rainy from "../../assets/icons/rainy.png";
import Haze from "../../assets/icons/haze.png";
import Sunny from "../../assets/icons/sun.png";
import { Typography } from "../typography";

const icons = {
  Clouds: Cloud,
  Haze: Haze,
  rainy: Rainy,
  sunny: Sunny,
  Smoke: Cloud,
};

export const WeatherReport = (props) => {
  const { weatherData = {} } = props;

  return (
    <div id="weather-report">
      <div className="weather-report__Heading">
        <Typography variant="h4">{weatherData?.name}</Typography>
      </div>
      <div className="weather-report__details">
        <div className="weather-report__details-temprature">
          <img
            src={icons[weatherData?.weather[0]?.main]}
            alt="Weather icon"
            height={75}
            width={75}
          />
          <div className="weather-report__details-temprature-value">
            <Typography variant="h6">{weatherData?.main?.temp} °C</Typography>
            <Typography variant="caption">{`(${weatherData?.weather[0]?.main})`}</Typography>
          </div>
        </div>
        <div className="weather-report__details-summary">
          <div className="weather__summary">
            <Typography variant="subtitle2" color="373737">
              Max Temp:
            </Typography>
            <Typography variant="body1" fontSize="18px">
              {weatherData?.main?.temp_max}
            </Typography>
          </div>
          <div className="weather__summary">
            <Typography variant="subtitle2" color="373737">
              Min Temp:
            </Typography>
            <Typography variant="body1" fontSize="18px">
              {weatherData?.main?.temp_min}
            </Typography>
          </div>
          <div className="weather__summary">
            <Typography variant="subtitle2" color="373737">
              Humidity:
            </Typography>
            <Typography variant="body1" fontSize="18px">
              {weatherData?.main?.humidity}
            </Typography>
          </div>
          <div className="weather__summary">
            <Typography variant="subtitle2" color="373737">
              Wind Speed:
            </Typography>
            <Typography variant="body1" fontSize="18px">
              {weatherData?.wind?.speed}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};
