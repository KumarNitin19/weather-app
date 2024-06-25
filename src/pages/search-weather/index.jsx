import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../../env.contanst";
import AreaGraph from "../../components/area-graph";
import BarGraph from "../../components/bar-graph";
import { Button } from "../../components/button";
import { CardWrapper } from "../../components/card-wrapper";
import { Input } from "../../components/input";
import PieChart from "../../components/pie-chart";
import { Typography } from "../../components/typography";
import { WeatherReport } from "../../components/weather-report";
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
          <Button variant="contained" onClick={getCityWeatherData}>
            Search
          </Button>
        </div>
        <div className="search-weather__mode" onClick={handleTheme}>
          <svg
            className="svg_icon"
            viewBox="0 0 24 24"
            tabindex="-1"
            title="LightMode">
            <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5M2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1m18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1M11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1m0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1M5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0z"></path>
          </svg>
          <svg
            className="svg_icon dark-mode__icon"
            viewBox="0 0 24 24"
            tabindex="-1"
            title="DrakMode">
            <path d="M11.1 12.08c-2.33-4.51-.5-8.48.53-10.07C6.27 2.2 1.98 6.59 1.98 12c0 .14.02.28.02.42.62-.27 1.29-.42 2-.42 1.66 0 3.18.83 4.1 2.15 1.67.48 2.9 2.02 2.9 3.85 0 1.52-.87 2.83-2.12 3.51.98.32 2.03.5 3.11.5 3.5 0 6.58-1.8 8.37-4.52-2.36.23-6.98-.97-9.26-5.41"></path>
            <path d="M7 16h-.18C6.4 14.84 5.3 14 4 14c-1.66 0-3 1.34-3 3s1.34 3 3 3h3c1.1 0 2-.9 2-2s-.9-2-2-2"></path>
          </svg>
          <div className={`selected-mode ${selectedTheme}-mode`}></div>
        </div>
      </div>

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
      <CardWrapper>
        <div>
          <div>
            <Typography variant="body2" fontWeight="500" color="#6e6d7a">
              Rain Chance
            </Typography>
            <Typography variant="body2" fontWeight="500" color="#6e6d7a">
              Low
            </Typography>
          </div>
          <PieChart />
        </div>
      </CardWrapper>
    </div>
  );
}
