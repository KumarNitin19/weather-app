import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../../env.contanst";
import DarkMode from "../../assets/svg/DarkMode";
import LightMode from "../../assets/svg/LightMode";
import SearchIcon from "../../assets/svg/SearchIcon";
import AreaGraph from "../../components/area-graph";
import BarGraph from "../../components/bar-graph";
import { Button } from "../../components/button";
import { CardWrapper } from "../../components/card-wrapper";
import { Input } from "../../components/input";
import PieChart from "../../components/pie-chart";
import { Typography } from "../../components/typography";
import { WeatherReport } from "../../components/weather-report";
import WeeklyCard from "../../components/weekly-cards";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import "./index.css";

export default function SearchWeather() {
  const [cityName, setCityName] = useState("");
  const [selectedTheme, setSelectedTheme] = useState("light");
  const [weatherData, setWeatherData] = useState({});
  const [error, setError] = useState(false);
  const [, setWeatherHistory] = useLocalStorage("weatherHistory", []);
  const navigate = useNavigate();

  const goToHistoryPage = useCallback(() => navigate("/history"), []);

  const handleChange = useCallback((e) => setCityName(e.target.value), []);

  const getCityWeatherData = useCallback(async () => {
    try {
      const response = await fetch(API_URL + cityName);
      const data = await response.json();
      if (data.cod === 200) {
        setWeatherData(data);
        setWeatherHistory((prev) => [...prev, data]);
        setCityName("");
        setError(false);
      } else {
        setError(true);
      }
    } catch (error) {
      setError(true);
    }
  }, [cityName]);

  const handleTheme = useCallback(
    () => setSelectedTheme((prev) => (prev === "light" ? "dark" : "light")),
    []
  );

  return (
    <div id="search-weather">
      <div className="search-weather__topbar">
        <div className="search-weather__heading">
          <Typography fontFamily="oswald" variant="h6" fontWeight="500">
            WEATHERNOW
          </Typography>
          <div className="city__location" onClick={handleTheme}>
            <svg
              className="svg_icon"
              viewBox="0 0 24 24"
              tabindex="-1"
              title="Location">
              <path d="M12 2c-4.2 0-8 3.22-8 8.2 0 3.32 2.67 7.25 8 11.8 5.33-4.55 8-8.48 8-11.8C20 5.22 16.2 2 12 2m0 10c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2"></path>
            </svg>
            <div className="city__location-name">
              <Typography variant="body2" fontWeight="500">
                Seattle,
              </Typography>
              <Typography variant="body2">Australia</Typography>
            </div>
          </div>
        </div>
        <div className="search-weather__city">
          <Input
            value={cityName}
            placeholder="City ..."
            type="text"
            onChange={handleChange}
          />
          <div className="search__icon" onClick={getCityWeatherData}>
            <SearchIcon />
          </div>
        </div>
        <div className="search-weather__mode" onClick={handleTheme}>
          <LightMode />
          <DarkMode />
          <div className={`selected-mode ${selectedTheme}-mode`}></div>
        </div>
      </div>
      <WeeklyCard />
      {Object.keys(weatherData)?.length && !error ? (
        <WeatherReport weatherData={weatherData} />
      ) : error ? (
        <div className="search-weather__null-state">
          {`Oops, Something went wrong!! Please try again.. :(`}
        </div>
      ) : (
        <Typography variant="body2" color="grey" fontWeight="500">
          Please search for a city, use above input box and click search...
        </Typography>
      )}
      <div className="widget__first">
        {weatherData?.name && (
          <CardWrapper>
            <AreaGraph city={weatherData?.name} />
          </CardWrapper>
        )}
        <CardWrapper id="bar-chart__parent">
          <BarGraph city={weatherData?.name} />
        </CardWrapper>
      </div>
      <div className="center_widget">
        <CardWrapper>
          <div>
            <div>
              <Typography variant="body2" fontWeight="500" color="#6e6d7a">
                Rain Chance
              </Typography>
              <Typography variant="caption" color="#6e6d7a">
                Low
              </Typography>
            </div>
            <PieChart id="pie_chart_1" />
          </div>
        </CardWrapper>

        <CardWrapper>
          <div>
            <div>
              <Typography variant="body2" fontWeight="500" color="#6e6d7a">
                Rain Chance
              </Typography>
              <Typography variant="caption" color="#6e6d7a">
                Low
              </Typography>
            </div>
            <PieChart id="pie_chart_2" />
          </div>
        </CardWrapper>
      </div>
    </div>
  );
}
