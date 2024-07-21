import React from "react";
import { WEATHER_ICONS } from "../../contants/commonConstant";
import { Typography } from "../typography";
import "./style.css";

type Props = {
  active: boolean;
  weatherData: {
    id?: number;
    day?: string;
    tempratue?: string;
    realFeel?: string;
    wind?: string;
    humidity?: string;
    sunrise?: string;
    sunset?: string;
    weather?: string;
  };
};

export default function DayCard(props: Props) {
  const { active = false, weatherData = {} } = props;
  if (active) {
    return (
      <div className="day__card day__card-active">
        <div className="day__card-active-heading">
          <Typography variant="body1" fontWeight="500">
            {weatherData?.day}
          </Typography>
        </div>
        <div className="day__card-active-body">
          <div className="temprature-and-weather">
            <Typography variant="h3">16° C</Typography>
            {weatherData?.weather && (
              <img
                src={WEATHER_ICONS[weatherData?.weather]}
                alt="Weather icon"
                height={75}
                width={75}
              />
            )}
          </div>
          <div className="weather-details">
            <div className="key_value">
              <Typography variant="caption">Feel</Typography>
              <Typography variant="caption">18°</Typography>
            </div>
            <div className="key_value">
              <Typography variant="caption">Wind NE</Typography>
              <Typography variant="caption">5-8 km/h</Typography>
            </div>
            <div className="key_value">
              <Typography variant="caption">Pressure</Typography>
              <Typography variant="caption">1000</Typography>
            </div>
            <div className="key_value">
              <Typography variant="caption">Humidity</Typography>
              <Typography variant="caption">51%</Typography>
            </div>
            <div className="key_value">
              <Typography variant="caption">Sunrise</Typography>
              <Typography variant="caption">6:02 AM</Typography>
            </div>
            <div className="key_value">
              <Typography variant="caption">Sunset</Typography>
              <Typography variant="caption">9:18 PM</Typography>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="day__card">
      <div className="day__card-heading">
        <Typography variant="body1" fontWeight="500">
          {weatherData?.day?.slice(0, 3)}
        </Typography>
      </div>
    </div>
  );
}
