import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import Navbar from "../Shared/Navbar/Navbar";
import "./Chart.css";

const Chart = () => {
  const [data] = useState([
    Math.random() * 300,
    Math.random() * 300,
    Math.random() * 300,
    Math.random() * 300,
    Math.random() * 300,
    Math.random() * 300,
  ]);
  const svgRef = useRef();
  useEffect(() => {
    /* setting up svg container */
    const w = 400;
    const h = 300;
    const svg = d3
      .select(svgRef.current)
      .attr("width", w)
      .attr("height", h)
      .style("overflow", "visible")
      .style("margin-top", "75px");
    // set the scaling
    const xScale = d3
      .scaleBand()
      .domain(data.map((val, i) => i))
      .range([0, w])
      .padding(0.5);
    const yScale = d3.scaleLinear().domain([0, h]).range([h, 0]);
    // set the axes
    const xAxis = d3.axisBottom(xScale).ticks(data.length);
    const yAxis = d3.axisLeft(yScale).ticks(5);
    svg.append("g").call(xAxis).attr("transform", `translate(0, ${h})`);
    svg.append("g").call(yAxis);
    svg
      .selectAll(".bar")
      .data(data)
      .join("rect")
      .attr("x", (v, i) => xScale(i))
      .attr("y", yScale)
      .attr("width", xScale.bandwidth())
      .attr("height", (val) => h - yScale(val));
  }, [data]);
  const random = () => {
    window.location.reload();
  };
  return (
    <div>
      <Navbar />
      <div className="container">
        <svg ref={svgRef}></svg>
        <button onClick={random} className="btn cursor">
          Random
        </button>
      </div>
    </div>
  );
};

export default Chart;
