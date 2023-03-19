import React, { Component } from "react";
import Chart from "react-apexcharts";

class DashboardChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-area",
        },
        grid: {
          borderColor: "#ffffff",
        },
        stroke: {
          show: true,
          curve: "straight",
          lineCap: "round",
          colors: ["#01c887"],
          width: 4,
        },
        markers: {
          size: 0,
        },
        dataLabels: {
          style: {
            colors: ["#636363"],
          },
          enabled: false,
        },
        fill: {
          colors: ["#01c887"],
        },
        yaxis: {
          min: 174000,
          max: 222800,
        },

        xaxis: {
          categories: [
            "start",
            "01 / 02 / 2023",
            "02 / 02 / 2023",
            "03 / 02 / 2023",
            "04 / 02 / 2023",
            "05 / 02 / 2023",
            "06 / 02 / 2023",
            "07 / 02 / 2023",
            "08 / 02 / 2023",
            "09 / 02 / 2023",
            "10 / 02 / 2023",
            "11 / 02 / 2023",
            "12 / 02 / 2023",
            "13 / 02 / 2023",
          ],
        },
      },
      series: [
        {
          type: "area",
          data: [
            199400, 185000, 198000, 200000, 178000, 195000, 210000, 215000,
            198000, 200000, 192000, 197000, 210000,
          ],
        },
      ],
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart w-full overflow-auto">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="area"
              // width="600px"
              height="450px"
              className="dashboard-graphs"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default DashboardChart;
