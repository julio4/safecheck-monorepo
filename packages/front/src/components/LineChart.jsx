import React from "react";
import { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";

const LineChart = (props) => {
  return (
    <ReactApexChart
      options={props.chartOptions}
      series={props.chartData}
      type="area"
      width="100%"
      height="100%"
    />
  );
}


export default LineChart;
