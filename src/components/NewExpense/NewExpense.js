import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
  const [isEditing, setIsEditing] = useState(false);
  const saveExpenseDataHandler = (expenses) => {
    const newExpense = {
      ...expenses,
      id: Math.random().toString(),
    };
    console.log("Received in NewExpense component");
    props.onSaveExpenseData(newExpense);
    setIsEditing(false);
  };

  const stopEditinghandler = () => {
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  return (
    <div className="new-expense">
      {isEditing ? (
        <ExpenseForm
          onExpenseFormSubmit={saveExpenseDataHandler}
          onCancel={stopEditinghandler}
        />
      ) : (
        <button onClick={startEditingHandler}>Add a new expense</button>
      )}
    </div>
  );
}

export default NewExpense;
