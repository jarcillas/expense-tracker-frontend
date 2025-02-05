import { Geist_Mono } from "next/font/google";

type ExpenseType = {
  amount: number;
  description: string;
  id: number;
  category: number;
};

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
});

const formatter = Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const Expense = ({ expense }: { expense: ExpenseType }) => {
  return (
    <div className="flex flex-row justify-between items-center w-full h-full py-2 px-1 hover:bg-gray-900 select-none">
      <div>{expense.description}</div>
      <div className={geistMono.className}>
        {formatter.format(expense.amount)}
      </div>
    </div>
  );
};

export default Expense;

export type { ExpenseType };
