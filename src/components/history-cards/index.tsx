import { WEATHER_ICONS } from "../../contants/commonConstant";
import { Typography } from "../typography";
import "./style.css";

function HistoryCard() {
  return (
    <div className="history_card">
      <div className="history_card-location">
        <Typography variant="body2">US</Typography>
        <Typography variant="h6" fontWeight="500">
          California
        </Typography>
        <Typography variant="body2">Sunny</Typography>
      </div>
      <div className="history_card-weather">
        <img
          src={WEATHER_ICONS["sunny"]}
          height={50}
          width={50}
          alt="Weather icon"
        />
        <Typography variant="h4" fontWeight="500">
          17° C
        </Typography>
      </div>
    </div>
  );
}

export default HistoryCard;
