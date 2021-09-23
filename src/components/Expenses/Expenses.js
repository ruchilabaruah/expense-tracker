import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseChart from "./ExpenseChart";
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses(props) {
  const [appliedExpensefilterYear, setExpenseFilteredYear] = useState("2021");
  const expensesFilterHandler = (appliedFilter) => {
    console.log(
      appliedFilter,
      " : Filter applied received on Expenses component"
    );
    setExpenseFilteredYear(appliedFilter);
  };

  const filteredExpenses = props.expenses.filter(
    (expense) =>
      expense.date.getFullYear().toString() == appliedExpensefilterYear
  );
  return (
    <div>
      <Card className="expenses">
        <ExpenseChart expenses={filteredExpenses} />
        <ExpensesFilter
          onFilterApplied={expensesFilterHandler}
          filterYear={appliedExpensefilterYear}
        />
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
