import React, { useEffect } from "react";
import { memo } from "react";

const width = 250;
const height = 250;
const radius = Math.min(width, height) / 2;
const donutChartData = { a: 25, b: 75 };

const PieChart = () => {
  const createPieChart = () => {
    const svg = d3
      .select("#pie_chart")
      .append("svg")
      .attr("height", height)
      .attr("width", width)
      .append("g")
      .attr("transform", `translate(${width / 2},${height / 2})`);
    const arc = d3
      .arc()
      .innerRadius(radius - 20)
      .outerRadius(radius);
    const pie = d3.pie().value((d) => d.value);
    const dataReady = pie(d3?.entries(donutChartData));
    const color = d3.scaleOrdinal().range(["#e8e7fd", "#7b5ff7"]);
    svg
      .selectAll(".arc")
      .data(dataReady)
      .enter()
      .append("path")
      .attr("d", arc)
      .attr("class", "arc")
      .attr("fill", (d) => color(d.data.key))
      .attr("stroke", "white")
      .attr("stroke-width", 2);

    svg
      .append("g")
      .append("text")
      .attr("transform", `translate(-20, 4)`)
      .attr("class", "montserrat")
      .attr("font-size", "32px")
      .attr("font-weight", 500)
      .text("25%");
  };

  useEffect(() => {
    createPieChart();
  }, []);

  return <div id="pie_chart"></div>;
};

export default memo(PieChart);
