import React, { memo } from "react";
import "./index.css";

const margin = {
  top: 25,
  right: 25,
  bottom: 25,
  left: 25,
};
const parentDiv = document.getElementById("bar_graph");
const width = parentDiv?.clientWidth;
const height = 300;

const BarGraph = () => {
  d3.select(parentDiv)
    .append("svg")
    .attr("height", height - margin.top - margin.bottom)
    .attr("width", width - margin.left - margin.right);
  return <div id="bar_graph"></div>;
};

export default memo(BarGraph);
