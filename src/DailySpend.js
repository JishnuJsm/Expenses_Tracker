export default function DailySpend({
  date,
  day,
  month,
  year,
  income = "0.00",
  expense = "0.00",
  category,
  title,
  paymode
}) {
  return (
    <div className="dailySpend">
      <div className="dailySpendR1">
        <div className="dailySpendDates">
          <p className="date">{date}</p>
          <p
            style={{
              backgroundColor:
                (day === "Sun" && "Red") || (day === "Sat" && "blue")
            }}
            className="day"
          >
            {day}
          </p>
          <small className="month">
            {month} {year}
          </small>
        </div>
        <div className="dailySpendAmount">
          <p className="dailySpendIncome">&#x20B9;{income}</p>
          <p className="dailySpendExpenses">&#x20B9;{expense}</p>
        </div>
      </div>
      <div className="dailySpendR2">
        <p className="dailySpenCatogory">{category}</p>
        <div className="dailySpendDetail">
          <p className="dailySpendNote">{title}</p>
          <p className="dailySpendPayment">{paymode}</p>
        </div>
        <p className="dailySpendTotal">&#x20B9;0.00</p>
      </div>
    </div>
  );
}
