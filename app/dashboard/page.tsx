import MaxWidthWrapper from "../components/common/max-width-wrapper";
import ExpenseCategoryTrend from "../components/dashboard/expense-trend-category";
import ExpenseTrends from "../components/dashboard/expense-trends";
import Summary from "../components/dashboard/summary";
import DashboardLayout from "./dashboard-layout";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <MaxWidthWrapper>
        <div className="flex flex-col gap-8">
          <Summary />
          <div className="flex gap-8">
            <ExpenseTrends />
            <ExpenseCategoryTrend />
          </div>
        </div>
      </MaxWidthWrapper>
    </DashboardLayout>
  );
}
