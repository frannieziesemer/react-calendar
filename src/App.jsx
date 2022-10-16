import { Route, BrowserRouter, Routes } from "react-router-dom";

import { useEffect, useState } from "react";
import "./App.css";

import { Calendar } from "./Components/Calendar";
import { Weekday } from "./Components/Weekday";
import { Day } from "./Components/Day";

function App() {
  const date = new Date();
  const [nav, setNav] = useState(0);
  const [dateDisplay, setDateDisplay] = useState("");
  const [month, setMonth] = useState(date.getMonth());
  const [year, setYear] = useState(date.getFullYear());

  const showPrevMonth = () => {
    const newNavPos = nav - 1;
    setNav(newNavPos);

    date.setMonth(new Date().getMonth() + newNavPos);
    setMonth(date.getMonth());
    setYear(date.getFullYear());
  };

  const showNextMonth = () => {
    const newNavPos = nav + 1;
    setNav(newNavPos);

    date.setMonth(new Date().getMonth() + newNavPos);
    setMonth(date.getMonth());
    setYear(date.getFullYear());
  };

  return (
    <Calendar
      date={date}
      month={month}
      showNextMonth={showNextMonth}
      showPrevMonth={showPrevMonth}
      year={year}
    />
  );
}

export default App;
