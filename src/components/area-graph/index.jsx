import { memo, useEffect, useState } from "react";
import { fetchData } from "../../service/getBulkWeatherData";

const AreaGraph = ({ city = "" }) => {
  const [chartData, setChartData] = useState([]);
  const margins = {
    top: 25,
    right: 25,
    bottom: 25,
    left: 25,
  };

  const width = 960 - margins.left - margins.right;
  const height = 300 - margins.top - margins.bottom;

  const x = d3.scaleTime().range([0, width]);
  const y = d3.scaleLinear().range([height, 0]);

  const xAxis = d3.axisBottom().scale(x);
  const yAxis = d3.axisLeft().scale(y);

  const svg = d3
    .select("#area-graph")
    .append("svg")
    .attr("width", width + margins.left + margins.right)
    .attr("height", height + margins.top + margins.bottom)
    .append("g")
    .attr("transform", `translate(${margins.left}, ${margins.right})`);

  const plotGraph = (data) => {
    x.domain(
      d3.extent(data, (d) => {
        const date = new Date(d.dt_txt);
        return date;
      })
    );

    y.domain([0, d3.max(data, (d) => d.main.temp)]);

    svg.append("g").attr("transform", `translate(0,${height})`).call(xAxis);
    svg.append("g").call(yAxis);

    svg
      .append("path")
      .datum(data)
      .attr("fill", "#e8e7fd")
      .attr("stroke", "#6042e7")
      .attr("stroke-width", 2)
      .attr(
        "d",
        d3
          .area()
          .x((d) => {
            const date = new Date(d.dt_txt);
            return x(date);
          })
          .y0(y(0))
          .y1((d) => y(d.main.temp))
      );
  };

  useEffect(() => {
    if (city) {
      async function getData() {
        const data = await fetchData(city);
        setChartData(data);
      }
      getData();
    }
  }, [city]);

  useEffect(() => {
    if (chartData?.length) {
      plotGraph(chartData);
    }
  }, [chartData]);

  return <div id="area-graph"></div>;
};

export default memo(AreaGraph);
