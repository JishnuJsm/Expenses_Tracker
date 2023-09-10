import DailySpend from "./DailySpend";
import { BsPlus } from "react-icons/bs";
import AddExpenses from "./AddExpenses";
import { useContext, useState } from "react";
import { themeSetter } from "./App";

export default function Transaction() {
  const { theme } = useContext(themeSetter);
  const [isAddExpense, setIsAddExpense] = useState(false);
  return (
    <>
      <DailySpend
        date="06"
        day="Wed"
        month="09"
        year="2023"
        income="0.00"
        expense="6099.00"
        category="Education"
        title="Course Fee Payment"
        paymode="Account"
      />
      <DailySpend
        date="05"
        day="Tue"
        month="09"
        year="2023"
        income="5,000"
        expense="0.00"
        category="Borrow"
        title="Money get From Rahul"
        paymode="Cash"
      />
      <DailySpend
        date="04"
        day="Mon"
        month="09"
        year="2023"
        income="0.00"
        expense="599.00"
        category="Purchase"
        title="Back Cover Purchase"
        paymode="Account"
      />
      <DailySpend
        date="03"
        day="Sun"
        month="09"
        year="2023"
        income="0.00"
        expense="1000.00"
        category="Chill Out"
        title="Movie TicketBooking"
        paymode="Account"
      />
      <DailySpend
        date="02"
        day="Sat"
        month="09"
        year="2023"
        income="0.00"
        expense="5000.00"
        category="Rent"
        title="Aug Month House Rent"
        paymode="Cash"
      />
      <DailySpend
        date="01"
        day="Fri"
        month="09"
        year="2023"
        income="15,000"
        expense="0.00"
        category="Salary"
        title="August Month Salary"
        paymode="Account"
      />
      <div
        className="addSpendButton"
        style={{ backgroundColor: `${theme}` }}
        onClick={() => setIsAddExpense(true)}
      >
        <BsPlus />
      </div>
      {isAddExpense && <AddExpenses setIsAddExpense={setIsAddExpense} />}
    </>
  );
}
