import React from "react";

const margin = {
  top: 25,
  right: 25,
  bottom: 25,
  left: 25,
};
const width = d3.select("#bar_graph").style("width");
const height = 250;

export const BarGraph = () => {
  const svg = d3
    .select("#bar_graph")
    .append("svg")
    .attr("height", height - margin.top - margin.bottom)
    .attr("width", width - margin.left - margin.right);
  return <div id="bar_graph"></div>;
};
