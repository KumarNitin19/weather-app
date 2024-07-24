import { SEARCH_HISTORY } from "../../mockData/historyData";
import { CardWrapper } from "../card-wrapper";
import HistoryCard from "../history-cards";
import "./style.css";

function HistoryCardWidget() {
  return (
    <div className="history_card_widget">
      {SEARCH_HISTORY.map((detail) => (
        <CardWrapper key={detail.id}>
          <HistoryCard cardData={detail} />
        </CardWrapper>
      ))}
    </div>
  );
}

export default HistoryCardWidget;
