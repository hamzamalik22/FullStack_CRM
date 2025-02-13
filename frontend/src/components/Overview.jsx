import React from "react";
import DashboardCard from "./DashboardCard";
import CustomerChart from "./CustomerChart";
import OrdersChart from "./OrdersChart";

const Overview = () => {
  let listData = [
    {
      title: "BUDGET",
      large_amount: "24k",
      large_icon: "dollar",
      small_icon: "up",
      small_amount: "12",
      description: "Since last month",
      progress: "",
      color: "bg-blue-500",
    },
    {
      title: "CUSTOMERS",
      large_amount: "1.6k",
      large_icon: "users",
      small_icon: "down",
      small_amount: "16",
      description: "Since last month",
      progress: "",
      color: "bg-green-500",
    },
    {
      title: "PROGRESS",
      large_amount: "75.5%",
      large_icon: "menu",
      small_icon: "",
      small_amount: "",
      description: "",
      progress: "progress_bar",
      color: "bg-orange-500",
    },
    {
      title: "PROFIT",
      large_amount: "$15k",
      large_icon: "mail",
      small_icon: "",
      small_amount: "",
      description: "",
      progress: "",
      color: "bg-purple-500",
    },
  ];
  return (
    <div className="h-full p-4">
      <div className="flex flex-wrap gap-5 flex-shrink-0 py-3 px-2">
        {listData.map((item, index) => (
          <DashboardCard key={index} data={item} />
        ))}
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-around gap-4">
        <div className="w-full lg:w-[50%]">
          <CustomerChart />
        </div>
        <div className="w-full lg:w-[50%]">
          <OrdersChart />
        </div>
      </div>
    </div>
  );
};


export default Overview;
