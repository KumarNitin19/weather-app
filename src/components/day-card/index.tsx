import React from "react";

type Props = {
  active: boolean;
  weatherData: {
    id: number;
    day: string;
    tempratue: string;
    realFeel: string;
    wind: string;
    humidity: string;
    sunrise: string;
    sunset: string;
    weather: string;
  };
};

export default function DayCard(props: Props) {
  const { active = false, weatherData = {} } = props;
  if (active) {
    return (
      <div className="day__card day__card-active">
        <div>Day Card</div>
      </div>
    );
  }
  return (
    <div className="day__card">
      <div>Day Card</div>
    </div>
  );
}
