type ExpenseType = {
  amount: number;
  description: string;
  id: number;
  category: number;
};

const Expense = ({ expense }: { expense: ExpenseType }) => {
  return (
    <div className="flex flex-row justify-between items-center w-full p-4 rounded-md border-gray-400 border-[1px] hover:bg-gray-900 select-none">
      <div>{expense.description}</div>
      <div>{expense.amount}</div>
    </div>
  );
};

export default Expense;

export type { ExpenseType };
