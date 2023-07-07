import React from "react";
import { Dropdown, Table, Tag } from "antd";

const DashboardTable = () => {
  const [selectedRowKeys, setSelectedRowKeys] = React.useState([]);
  const items = [
    {
      key: "1",
      label: "Edit",
    },
    {
      key: "2",
      label: "Delete",
    },
  ];

  const columns = [
    {
      title: (
        <span className="font-bold text-lightest-gray uppercase">Trade</span>
      ),
      dataIndex: "trade",
      key: "trade",
      render: (trade) => (
        <p className="text-black font-semibold hover:text-black">
          {trade}
          <p className="text-blue-500 text-[11px] mt-0">Tesla, Inc.</p>
        </p>
      ),
    },
    {
      title: (
        <span className="font-bold text-lightest-gray uppercase">
          order amount
        </span>
      ),
      dataIndex: "amount",
      key: "amount",
      render: (amount) => (
        <p className="text-light-gray font-semibold hover:text-black">
          {amount}
        </p>
      ),
    },
    {
      title: (
        <span className="font-bold text-lightest-gray uppercase">
          Delivery Date
        </span>
      ),
      dataIndex: "date",
      key: "date",
      render: (date) => (
        <p className="text-light-gray font-semibold hover:text-black">{date}</p>
      ),
    },
    {
      title: (
        <span className="font-bold text-lightest-gray uppercase">Status</span>
      ),
      key: "status",
      dataIndex: "status",
      render: (_, { status }) => (
        <>
          {status.map((stat) => {
            if (stat === "processing") {
              return (
                <Tag
                  key={stat}
                  className="font-semibold"
                  style={{
                    borderRadius: "20px",
                    padding: "1px 16px",
                    backgroundColor: "#cdb9ff",
                    border: "1px solid #cdb9ff",
                    color: "#734cd4",
                  }}
                >
                  {stat}
                </Tag>
              );
            } else if (stat === "success") {
              return (
                <Tag
                  key={stat}
                  className="font-semibold"
                  style={{
                    borderRadius: "20px",
                    padding: "1px 16px",
                    backgroundColor: "#c3ffb9",
                    border: "1px solid #c3ffb9",
                    color: "#5cc24d",
                  }}
                >
                  {stat}
                </Tag>
              );
            } else {
              return (
                <Tag
                  key={stat}
                  className="font-semibold"
                  style={{
                    borderRadius: "20px",
                    padding: "1px 16px",
                    backgroundColor: "#ffccca",
                    border: "1px solid #ffccca",
                    color: "#db5954",
                  }}
                >
                  {stat}
                </Tag>
              );
            }
          })}
        </>
      ),
    },
    {
      title: (
        <span className="font-bold text-lightest-gray uppercase">Action</span>
      ),
      key: "action",
      render: () => (
        <Dropdown
          menu={{
            items,
          }}
        >
          <p className="text-xs text-light-green font-bold uppercase">View</p>
        </Dropdown>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      trade: "Tesla BUY",
      amount: "$30,000.00",
      date: "02 Feb. 2023",
      status: ["processing"],
    },
    {
      key: "2",
      trade: "Tesla BUY",
      amount: "$30,000.00",
      date: "25 Jan. 2023",
      status: ["success"],
    },
    {
      key: "3",
      trade: "Tesla BUY",
      amount: "$30,000.00",
      date: "15 Jan. 2023",
      status: ["success"],
    },
    {
      key: "4",
      trade: "Tesla BUY",
      amount: "$30,000.00",
      date: "01 Jan. 2023",
      status: ["success"],
    },
    {
      key: "5",
      trade: "Tesla BUY",
      amount: "$30,000.00",
      date: "24 Dec. 2023",
      status: ["declined"],
    },
    {
      key: "6",
      trade: "Tesla BUY",
      amount: "$30,000.00",
      date: "25 Dec. 2023",
      status: ["success"],
    },
  ];

  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <div className="w-full overflow-auto px-2 dashboard-table">
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        rowSelection={rowSelection}
      />
    </div>
  );
};

export default DashboardTable;
