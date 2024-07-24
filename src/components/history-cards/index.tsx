import { WEATHER_ICONS } from "../../contants/commonConstant";
import { Typography } from "../typography";
import "./style.css";

type IHistoryCardProps = {
  cardData: {
    country: string;
    city: string;
    weather: string;
    temprature: number;
  };
};

function HistoryCard({ cardData }: IHistoryCardProps) {
  return (
    <div className="history_card">
      <div className="history_card-location">
        <Typography variant="body2">{cardData.country}</Typography>
        <Typography variant="h6" fontWeight="500">
          {cardData.city}
        </Typography>
        <Typography variant="body2">{cardData.weather}</Typography>
      </div>
      <div className="history_card-weather">
        <img
          src={WEATHER_ICONS[cardData.weather]}
          height={50}
          width={50}
          alt="Weather icon"
        />
        <Typography variant="h4" fontWeight="500">
          {cardData.temprature}° C
        </Typography>
      </div>
    </div>
  );
}

export default HistoryCard;
