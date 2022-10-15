import { useState } from "react";

import { Day } from "./Day";

export const DayContainer = ({ monthNumber, year }) => {
  //new Date(year, monthNumber, 1) returns the first of the current month
  //new Date(year, monthNumber, 0) returns the last day of the previous month
  //new Date(year, monthNumber + 1, 0) returns the last day of the current month

  const lastDayofCurrentMonth = new Date(year, monthNumber + 1, 0);
  const [daysInMonth] = useState(lastDayofCurrentMonth.getDate());

  return (
    <div className="grid grid-cols-7 gap-4">
      {[...Array(daysInMonth)].map((el, index) => (
        <Day date={index + 1} key={index} />
      ))}
    </div>
  );
};
