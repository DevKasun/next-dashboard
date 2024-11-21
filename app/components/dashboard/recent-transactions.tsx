import { RecentTransactionTable } from "./recent-transaction-table";

export default function RecentTransactions() {
  return (
    <div className="flex-auto bg-white rounded-[10px] p-6 shadow-1">
      <h5 className="text-base pb-2">Recent transactions</h5>
      <RecentTransactionTable />
    </div>
  );
}
