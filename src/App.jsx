import { Route, BrowserRouter, Routes } from "react-router-dom";

import { useState } from "react";
import "./App.css";

import { Calendar } from "./Components/Calendar";
import { Weekday } from "./Components/Weekday";
import { Day } from "./Components/Day";

function App() {
  let date = new Date();
  const [monthNumber, setMonthNumber] = useState(date.getMonth());
  const [year] = useState(date.getFullYear());

  return <Calendar monthNumber={monthNumber} year={year} />;
}

export default App;
