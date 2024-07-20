import React from "react";
import { WEEKLY_DATA } from "../../mockData.js/weeklyData";
import DayCard from "../day-card";
export default function WeeklyCard() {
  return (
    <div className="weekly__card">
      {WEEKLY_DATA.map((weatherData) => (
        <DayCard
          active={weatherData.day === "Monday"}
          weatherData={weatherData}
        />
      ))}
    </div>
  );
}
