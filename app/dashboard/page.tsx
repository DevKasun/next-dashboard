import MaxWidthWrapper from "../components/common/max-width-wrapper";
import SummaryBox from "../components/dashboard/summary-box";
import DashboardLayout from "./dashboard-layout";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <MaxWidthWrapper>
        <div className="flex items-center gap-4">
          <SummaryBox title="Total expenses" value="$ 24,500" />
          <SummaryBox title="Monthly Average" value="$ 4,500" />
          <SummaryBox title="Active Categories" value="10" />
        </div>
      </MaxWidthWrapper>
    </DashboardLayout>
  );
}
