import { ExpenseCategoryTrendChart } from "./expense-trend-category-chart";

export default function ExpenseCategoryTrend() {
  return (
    <div className="flex-auto w-[35%] bg-white rounded-[10px] p-6 shadow-1">
      <h5 className="text-base pb-2">Expense trends</h5>
      <ExpenseCategoryTrendChart />
    </div>
  );
}
