"use client";

import { AreaChart } from "@tremor/react";

const chartdata = [
  {
    date: "Jan 23",
    Total: 4415, // 2100 + 285 + 650 + 380 + 150 + 250 + 400 + 200
  },
  {
    date: "Feb 23",
    Total: 4345, // 2100 + 265 + 620 + 350 + 180 + 280 + 350 + 200
  },
  {
    date: "Mar 23",
    Total: 4625, // 2100 + 245 + 680 + 410 + 220 + 320 + 450 + 200
  },
  {
    date: "Apr 23",
    Total: 4395, // 2100 + 225 + 645 + 390 + 165 + 290 + 380 + 200
  },
  {
    date: "May 23",
    Total: 4575, // 2100 + 235 + 670 + 420 + 190 + 340 + 420 + 200
  },
  {
    date: "Jun 23",
    Total: 4685, // 2100 + 295 + 690 + 385 + 175 + 380 + 460 + 200
  },
  {
    date: "Jul 23",
    Total: 4735, // 2100 + 315 + 655 + 395 + 160 + 420 + 490 + 200
  },
  {
    date: "Aug 23",
    Total: 4645, // 2100 + 325 + 635 + 375 + 185 + 390 + 435 + 200
  },
  {
    date: "Sep 23",
    Total: 4495, // 2100 + 285 + 660 + 365 + 195 + 310 + 380 + 200
  },
  {
    date: "Oct 23",
    Total: 4450, // 2100 + 255 + 675 + 405 + 170 + 285 + 360 + 200
  },
  {
    date: "Nov 23",
    Total: 4540, // 2100 + 275 + 695 + 425 + 155 + 265 + 425 + 200
  },
  {
    date: "Dec 23",
    Total: 4985, // 2100 + 305 + 725 + 445 + 180 + 450 + 580 + 200
  },
];

export const ExpenseTrendChart = () => (
  <AreaChart
    className="h-64"
    data={chartdata}
    index="date"
    categories={["Total"]}
    colors={["blue"]} // Single color for the total
    valueFormatter={(number: number) =>
      `$${Intl.NumberFormat("us").format(number).toString()}`
    }
    onValueChange={(v) => console.log(v)}
    xAxisLabel="Month"
    yAxisLabel="Total Monthly Expenses"
  />
);
