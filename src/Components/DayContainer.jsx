import { useState } from "react";

import { Day } from "./Day";

export const DayContainer = ({ monthNumber, year }) => {
  const firstDayofCurrentMonth = new Date(year, monthNumber, 1);
  const paddingDays = firstDayofCurrentMonth.getDay();
  const lastDayofCurrentMonth = new Date(year, monthNumber + 1, 0);
  const daysInMonth = lastDayofCurrentMonth.getDate();
  const days = [];
  // grid consists of 42 days now, maybe later could check to see if this fits for the month
  for (let i = 1; i <= 42; i++) {
    if (i > paddingDays && i <= daysInMonth + paddingDays) {
      days.push({
        value: i - paddingDays,
        date: i - paddingDays,
      });
    } else {
      days.push({
        value: "padding",
        date: "",
      });
    }
  }

  return (
    <div className="grid grid-cols-7 gap-4">
      {days.map((day, index) => (
        <Day date={day.date} key={index} />
      ))}
    </div>
  );
};
