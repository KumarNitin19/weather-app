import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/button";
import { Typography } from "../../components/typography";
import { WeatherReport } from "../../components/weather-report";
import { WeatherReportCard } from "../../components/weather-report-card";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import "./index.css";

export const HistoryPage = () => {
  const [weatherHistory, setWeatherHistory] = useLocalStorage("weatherHistory");
  const navigate = useNavigate();
  const goToHome = useCallback(() => navigate("/"), []);

  const clearHistory = useCallback(() => setWeatherHistory([]), []);

  return (
    <div id="history-page">
      <div className="history-page__heading">
        <div className="history-page__heading-title">
          <Button
            variant="text"
            className="btn-rounded"
            title="Go Back"
            onClick={goToHome}>{`<`}</Button>
          <Typography variant="h6" fontWeight="500" fontFamily="oswald">
            History
          </Typography>
        </div>
        <Button variant="outlined" onClick={clearHistory}>
          Clear History
        </Button>
      </div>
      <div className="history-page__weather-search-logs">
        {weatherHistory?.length ? (
          weatherHistory?.map((history) => (
            <WeatherReportCard>
              <WeatherReport weatherData={history} />
            </WeatherReportCard>
          ))
        ) : (
          <Typography variant="body2" color="grey" fontWeight="500">
            Currently, No history present please click back button to go to home
            page and search...
          </Typography>
        )}
      </div>
    </div>
  );
};
