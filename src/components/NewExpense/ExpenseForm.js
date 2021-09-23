import { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  /** 
   * You can also use just one state managed in an object instead of three, 
     but use spead operator during change handlers so that we donot lose old data
* */
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredState] = useState("");

  const titleChangeHandler = (ev) => {
    setEnteredTitle(ev.target.value);
  };

  const amountChangeHandler = (ev) => {
    setEnteredAmount(ev.target.value);
  };

  const dateChangeHandler = (ev) => {
    setEnteredState(ev.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onExpenseFormSubmit(expenseData);

    console.log(expenseData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredState("");
  };

  const cancelNewExpense = () => {
    props.onCancel();
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={cancelNewExpense}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
