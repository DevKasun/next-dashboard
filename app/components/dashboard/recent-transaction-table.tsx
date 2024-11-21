import {
  Table,
  TableBody,
  TableCell,
  TableFoot,
  TableHead,
  TableHeaderCell,
  TableRow,
} from "@tremor/react";

export function RecentTransactionTable() {
  const data: Array<{
    id: number;
    date: string;
    description: string;
    category: string;
    amount: number;
  }> = [
    {
      id: 1,
      date: "2024-01-15",
      description: "Grocery Shopping",
      category: "Food & Groceries",
      amount: -125.5,
    },
    {
      id: 2,
      date: "2024-01-14",
      description: "Salary Deposit",
      category: "Income",
      amount: 3500.0,
    },
    {
      id: 3,
      date: "2024-01-13",
      description: "Electric Bill",
      category: "Utilities",
      amount: -85.2,
    },
    {
      id: 4,
      date: "2024-01-12",
      description: "Coffee Shop",
      category: "Dining",
      amount: -4.5,
    },
    {
      id: 5,
      date: "2024-01-11",
      description: "Online Shopping",
      category: "Shopping",
      amount: -67.99,
    },
  ];
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell>Date</TableHeaderCell>
          <TableHeaderCell>Description</TableHeaderCell>
          <TableHeaderCell>Category</TableHeaderCell>
          <TableHeaderCell>amount</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.date}</TableCell>
            <TableCell>{item.description}</TableCell>
            <TableCell>{item.category}</TableCell>
            <TableCell
              className={item.amount < 0 ? "text-red-500" : "text-green-500"}
            >
              ${Math.abs(item.amount).toFixed(2)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
