import { ExpenseTrendChart } from "./expense-trends-chart";

export default function ExpenseTrends() {
  return (
    <div className="flex-auto w-[65%] bg-white rounded-[10px] p-6 shadow-1">
      <h5 className="text-base pb-2">Expense trends</h5>
      <ExpenseTrendChart />
    </div>
  );
}
