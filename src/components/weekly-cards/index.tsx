import { WEEKLY_DATA } from "../../mockData/weeklyData";
import DayCard from "../day-card";
import "./style.css";

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
