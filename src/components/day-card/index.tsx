import React from "react";
import { WEATHER_ICONS } from "../../contants/commonConstant";
import { Typography } from "../typography";

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
            <Typography variant="h5">16c</Typography>
            {weatherData?.weather && (
              <img
                src={WEATHER_ICONS[weatherData?.weather]}
                alt="Weather icon"
                height={75}
                width={75}
              />
            )}
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
