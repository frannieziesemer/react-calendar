import { Header } from "./Header";
import { WeekdayContainer } from "./WeekdayContainer";
import { DayContainer } from "./DayContainer";

export const Calendar = ({
  date,
  month,
  showNextMonth,
  showPrevMonth,
  year,
}) => {
  return (
    <div>
      <Header
        month={month}
        showNextMonth={showNextMonth}
        showPrevMonth={showPrevMonth}
        year={year}
      />
      <WeekdayContainer />
      <DayContainer date={date} month={month} year={year} />
    </div>
  );
};
