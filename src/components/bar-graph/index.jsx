import React, { memo } from "react";
import { useCallback, useEffect } from "react";
import { fetchData } from "../../service/getBulkWeatherData";
import "./index.css";

const margin = {
  top: 25,
  right: 25,
  bottom: 25,
  left: 25,
};

const width = 380;
const height = 300 - margin.top - margin.bottom;

const x = d3.scaleTime().range([0, width]);
const y = d3.scaleLinear().range([height, 0]);

const xAxis = d3.axisBottom().scale(x);
const yAxis = d3.axisLeft().scale(y);

const BarGraph = ({ city = "" }) => {
  const drawGraph = useCallback((weatherData) => {
    const dataReady = weatherData?.map((item) => ({
      rainPer: +item.pop * 100,
      date: item.dt_txt,
    }));

    const svg = d3
      .select("#bar_graph")
      .append("svg")
      .attr("height", height + margin.top + margin.bottom)
      .attr("width", `calc(100% - ${margin.left}px)`)
      .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

    x.domain(
      d3.extent(dataReady, (d) => {
        return new Date(d.date);
      })
    );

    y.domain([0, 100]);

    svg.append("g").attr("transform", `translate(0, ${height})`).call(xAxis);
    svg.append("g").call(yAxis);

    svg
      .selectAll(".bar")
      .data(dataReady)
      .enter()
      .append("rect")
      .attr("x", (d) => x(new Date(d.date)) - 6)
      .attr("y", (d) => y(d.rainPer))
      .attr("height", (d) => height - y(d.rainPer))
      .attr("width", "12")
      .attr("fill", "#6042e7");
  }, []);

  useEffect(() => {
    if (city) {
      async function getData() {
        const data = await fetchData(city);
        drawGraph(data);
      }
      getData();
    }
  }, [city]);

  return <div id="bar_graph"></div>;
};

export default memo(BarGraph);
