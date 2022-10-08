import Accordions from "components/accordions/Accordions";
import Lessons from "components/lessons/Lessons";
import {WEEK_DAYS} from "mainConstants";
import type {LessonType, DayLessonsType} from "types";
import Screen from "../Screen";


const lessons: LessonType[] = [
  {
    name: "кр. 17 н. Алгоритмы компонентов цифровой обработки данных",
    number: 1,
    type: "лек",
    groups: ["БСБО-01-19", "БСБО-02-19", "БСБО-03-19", "ББСО-01-19", "ББСО-02-19"],
    place: "251"
  },
  {
    name: "Технологическая (проектно-технологическая) практика",
    number: 2,
    type: "лаб",
    groups: ["БСБО-01-19", "БСБО-02-19"],
  },
  {
    name: "кр. 17 н. Алгоритмы компонентов цифровой обработки данных",
    number: 3,
    type: "пр",
    place: "301",
    groups: ["БСБО-01-19"],
  },
  {
    name: "кр. 17 н. Алгоритмы компонентов цифровой обработки данных",
    number: 5,
    type: "пр",
    groups: ["БСБО-01-19"],
  },
];

const weekDayLessons: DayLessonsType[] = [
  {
    day: WEEK_DAYS.MONDAY,
    lessons
  },
  {
    day: WEEK_DAYS.TUESDAY,
    lessons
  },
  {
    day: WEEK_DAYS.WEDNESDAY,
    lessons
  },
  {
    day: WEEK_DAYS.THURSDAY,
    lessons: []
  },
  {
    day: WEEK_DAYS.FRIDAY,
    lessons: []
  },
  {
    day: WEEK_DAYS.SATURDAY,
    lessons
  }
];

function WeekScreen() {
  const items = weekDayLessons.map(
    (dayLessons) => {
      const {day, lessons} = dayLessons;
      return {
        title: `${day} (${lessons.length})`,
        value: <Lessons lessons={lessons} />
      };
    }
  );
  return (
    <Screen>
      <Accordions items={items} />
    </Screen>
  );
}

export default WeekScreen;
