import { Typography } from "../typography";
import "./index.css";
import Cloud from "../../assets/icons/clouds.png";
import Rainy from "../../assets/icons/rainy.png";
import Haze from "../../assets/icons/haze.png";
import Sunny from "../../assets/icons/sun.png";

const icons = {
  Clouds: Cloud,
  Haze: Haze,
  rainy: Rainy,
  sunny: Sunny,
  Smoke: Cloud,
};
export const WeatherReportCard = () => {
  return (
    <div id="weather-report-card">
      <div>
        <Typography variant="body2" fontWeight="500">
          Monday
        </Typography>
        <Typography variant="body2">11:42 PM</Typography>
      </div>
      <div>
        <div>
          <div>
            <Typography variant="h4" fontWeight="500">
              16 C
            </Typography>
            <div>
              <Typography variant="caption">Humidity</Typography>
              <Typography variant="caption" fontWeight="500">
                51%
              </Typography>
            </div>
          </div>
          <img
            src={icons[weatherData?.weather[0]?.main]}
            alt="Weather icon"
            height={75}
            width={75}
          />
        </div>
      </div>
    </div>
  );
};
