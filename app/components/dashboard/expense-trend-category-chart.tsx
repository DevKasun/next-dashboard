"use client";

import { DonutChart } from "@tremor/react";

const chartdata = [
  {
    name: "Housing",
    amount: 2100,
  },
  {
    name: "Utilities",
    amount: 285,
  },
  {
    name: "Groceries",
    amount: 650,
  },
  {
    name: "Transportation",
    amount: 380,
  },
  {
    name: "Healthcare",
    amount: 150,
  },
  {
    name: "Entertainment",
    amount: 250,
  },
  {
    name: "Shopping",
    amount: 400,
  },
  {
    name: "Insurance",
    amount: 200,
  },
];

export const ExpenseCategoryTrendChart = () => {
  const totalAmount = chartdata.reduce((sum, item) => sum + item.amount, 0);
  return (
    <DonutChart
      className="w-56 h-56 mx-auto"
      data={chartdata}
      category="amount"
      value="amount"
      showLabel={true}
      colors={[
        "blue",
        "cyan",
        "green",
        "yellow",
        "red",
        "purple",
        "orange",
        "gray",
      ]}
      valueFormatter={(number: number) => {
        const percentage = ((number / totalAmount) * 100).toFixed(1);
        return `${percentage}%`;
      }}
    />
  );
};
