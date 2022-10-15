import { Weekday } from "./Weekday";

export const WeekdayContainer = (props) => {
  //array of weekdays
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <div className="WeekdayContainer grid grid-cols-7 gap-4">
      {weekdays.map((weekday, index) => (
        <Weekday day={weekday} key={index} />
      ))}
    </div>
  );
};
