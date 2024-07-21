import React, { useEffect, useState } from "react";
import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
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
  ChartContainer,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
  customers: {
    label: "Customers",
    color: "hsl(var(--chart-1))",
  },
};

const CustomerChart = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await api.get("/api/customers/");
        const customers = response.data.Customers;

        const cities = customers.reduce((acc, customer) => {
          acc[customer.city] = (acc[customer.city] || 0) + 1;
          return acc;
        }, {});

        const data = Object.keys(cities).map(city => ({
          city,
          customers: cities[city]
        }));

        setChartData(data);
      } catch (error) {
        console.error("Failed to fetch customers:", error);
      }
    };

    fetchCustomers();
  }, []);

  return (
    <Card className="w-full h-full">
      <CardHeader>
        <CardTitle>Customer Distribution</CardTitle>
        <CardDescription>Number of customers per city</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <CartesianGrid vertical={false} />
              <XAxis dataKey="city" tickLine={false} tickMargin={10} axisLine={false} />
              <YAxis />
              <Tooltip content={<ChartTooltipContent />} />
              <Bar dataKey="customers" fill="var(--color-customers)" radius={8} />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total customers per city
        </div>
      </CardFooter>
    </Card>
  );
};

export default CustomerChart;
