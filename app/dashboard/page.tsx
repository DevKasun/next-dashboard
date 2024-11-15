import MaxWidthWrapper from "../components/common/max-width-wrapper";
import ExpenseTrends from "../components/dashboard/expense-trends";
import Summary from "../components/dashboard/summary";
import SummaryBox from "../components/dashboard/summary-box";
import DashboardLayout from "./dashboard-layout";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <MaxWidthWrapper>
        <div className="flex flex-col gap-8">
          <Summary />
          <div>
            <ExpenseTrends />
          </div>
        </div>
      </MaxWidthWrapper>
    </DashboardLayout>
  );
}
