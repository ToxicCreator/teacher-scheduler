import WeekTabs from "components/week-tabs/WeekTabs";
import Lessons from "components/lessons/Lessons";
import {LessonCard} from "components/lesson-card";
import type {LessonType} from "types";
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
    number: 4,
    type: "пр",
    place: "301",
    groups: ["БСБО-01-19"],
  },
  {
    name: "кр. 17 н. Алгоритмы компонентов цифровой обработки данных",
    number: 5,
    type: "пр",
    groups: ["БСБО-01-19"],
  }
];

// const lessonsMap = (lesson: LessonType) => {
//   return (
//     <LessonCard
//       key={lesson.number}
//       {...lesson}
//     />
//   );
// }

function DayScreen() {
  return (
    <Screen header={<WeekTabs />} >
      <Lessons lessons={lessons} />
    </Screen>
  );
}

export default DayScreen;
