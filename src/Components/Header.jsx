export const Header = ({ month, showNextMonth, showPrevMonth, year }) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className="Header">
      <h1 className="text-3xl text-emerald-800">
        {months[month]} {year}
      </h1>
      <button onClick={showPrevMonth}>Prev Month</button>
      
      <button onClick={showNextMonth}>Next Month</button>
    </div>
  );
};
