export const Header = ({ monthNumber, year }) => {
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
        {months[monthNumber]} {year}
      </h1>
    </div>
  );
};
