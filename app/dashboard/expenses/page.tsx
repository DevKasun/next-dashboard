import MaxWidthWrapper from "@/app/components/common/max-width-wrapper";
import DashboardLayout from "../dashboard-layout";
import { ExpensesTable } from "@/app/components/expenses/expenses-table";

export default function ExpensesPage() {
  return (
    <DashboardLayout>
      <MaxWidthWrapper>
        {/* TODO: Need to add filters and search bar */}
        <div className="flex-auto bg-white rounded-[10px] p-6 shadow-1">
          <ExpensesTable />
        </div>
      </MaxWidthWrapper>
    </DashboardLayout>
  );
}
