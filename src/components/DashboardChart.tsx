import React from "react";
import Chart from "react-apexcharts";

const DashboardChart = ({ balanceHistoryReducer }: any) => {
  const balances = balanceHistoryReducer?.balance?.map((item: any) =>
    parseInt(item.balance)
  );
  const dates = balanceHistoryReducer?.balance?.map(
    (item: any) => item.created_at
  );
  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart w-full overflow-auto">
          <Chart
            options={{
              chart: {
                id: "basic-area",
              },
              grid: {
                borderColor: "#ffffff",
              },
              stroke: {
                show: true,
                curve: "smooth",
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
              xaxis: {
                categories: dates,
              },
            }}
            series={[
              {
                name: "Desktops",
                data: balances,
              },
            ]}
            type="area"
            height="450px"
            className="dashboard-graphs"
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardChart;
