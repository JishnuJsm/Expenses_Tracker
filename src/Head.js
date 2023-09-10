import React from "react";

export default function Head() {
  return (
    <div className="head">
      <div className="income money">
        <h5>Income</h5>
        <p>20,000</p>
      </div>
      <div className="expenses money">
        <h5>Expenses</h5>
        <p>12,898</p>
      </div>
      <div className="total money">
        <h5>Total</h5>
        <p>7,102</p>
      </div>
    </div>
  );
}
