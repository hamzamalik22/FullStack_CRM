import React, { useEffect, useState } from "react";
import { Pie, PieChart, ResponsiveContainer } from "recharts";
import { TrendingUp } from "lucide-react";
import api from "@/utils/api";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  // ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
  orders: {
    label: "Orders",
  },
  delivered: {
    label: "Delivered",
    color: "hsl(var(--chart-1))", // Green color
  },
  outForDelivery: {
    label: "Out for Delivery",
    color: "#FFC107", // Amber color
  },
  pending: {
    label: "Pending",
    color: "#E74C3C", // Red color
  },
};

const OrderPieChart = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await api.get("/api/orders/");
        const orders = response.data.Orders;

        const statusCounts = {
          delivered: orders.filter((order) => order.status === "Delivered")
            .length,
          outForDelivery: orders.filter(
            (order) => order.status === "Out for delivery"
          ).length,
          pending: orders.filter((order) => order.status === "Pending").length,
        };

        const data = Object.keys(statusCounts).map((status) => ({
          status,
          count: statusCounts[status],
        }));

        setChartData(data);
      } catch (error) {
        console.error("Failed to fetch orders:", error);
      }
    };

    fetchOrders();
  }, []);

  const totalOrders = chartData.reduce((acc, curr) => acc + curr.count, 0);

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Order Status Pie Chart</CardTitle>
        <CardDescription>Orders by status</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Pie
                data={chartData}
                dataKey="count"
                nameKey="status"
                innerRadius={60}
                strokeWidth={5}
                label
              >
                {chartData.map((entry, index) => (
                  <Pie className="text-red-500"
                    key={`slice-${index}`}
                    dataKey="count"
                    nameKey="status"
                    innerRadius={index === 0 ? 60 : 70 + 10 * index}
                    outerRadius={index === 0 ? 80 : 90 + 10 * index}
                    fill={chartConfig[entry.status].color}
                    label
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Total Orders: {totalOrders}
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total orders by status
        </div>
      </CardFooter>
    </Card>
  );
};

export default OrderPieChart;
