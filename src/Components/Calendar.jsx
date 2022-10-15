import { Header } from "./Header";
import { WeekdayContainer } from "./WeekdayContainer";
import { DayContainer } from "./DayContainer";

export const Calendar = ({ monthNumber, year }) => {
  return (
    <div>
      <Header monthNumber={monthNumber} year={year} />
      <WeekdayContainer />
      <DayContainer monthNumber={monthNumber} year={year}/>
    </div>
  );
};
