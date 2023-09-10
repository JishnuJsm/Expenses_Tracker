import { AiOutlineArrowLeft } from "react-icons/ai";
import Button from "./Button";
export default function AddExpenses({ setIsAddExpense }) {
  return (
    <div className="addexpenses">
      <div className="addexpenseHeader">
        <AiOutlineArrowLeft
          onClick={() => setIsAddExpense(false)}
          style={{ cursor: "pointer" }}
        />
        Expenses
      </div>
      <div className="addexpenseCategory">
        <Button color="blue">Income</Button>
        <Button color="red">Expense</Button>
      </div>
      <div className="addexpensedate expense">
        <label>Date</label>
        <input type="date" />
      </div>
      <div className="addexpenseaccount expense">
        <label>Account</label>
        <input type="text" />
      </div>
      <div className="addexpensecategory expense">
        <label>Category</label>
        <input type="text" />
      </div>
      <div className="addexpenseAmount expense">
        <label>Amount</label>
        <input type="text" />
      </div>
      <div className="addexpensenote expense">
        <label>Note</label>
        <input type="text" />
      </div>
      <div className="saveButton">
        <Button color="white" bgColor="blue">
          Save
        </Button>
      </div>
    </div>
  );
}
