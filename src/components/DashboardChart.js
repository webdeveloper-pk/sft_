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
          categories: this.props.dates,
        },
      },
      series: [
        {
          type: "area",
          data: this.props.balances,
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
