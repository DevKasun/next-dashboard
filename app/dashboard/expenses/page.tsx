import MaxWidthWrapper from "@/app/components/common/max-width-wrapper";
import DashboardLayout from "../dashboard-layout";

export default function ExpensesPage() {
  return (
    <DashboardLayout>
      <MaxWidthWrapper>
        <h1>Expenses</h1>
      </MaxWidthWrapper>
    </DashboardLayout>
  );
}
