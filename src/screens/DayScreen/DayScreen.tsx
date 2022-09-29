import Stack from "@mui/material/Stack";
import WeekTabs from "components/week-tabs/WeekTabs";
import {LessonCard, type Lesson} from "components/lesson-card";
import Screen from "../Screen";


const lessons: Array<Lesson | {}> = [
  {
    name: "кр. 17 н. Алгоритмы компонентов цифровой обработки данных",
    type: "лек",
    groups: ["БСБО-01-19", "БСБО-02-19", "БСБО-03-19", "ББСО-01-19", "ББСО-02-19"],
    place: "251"
  },
  {},
  {
    name: "Технологическая (проектно-технологическая) практика",
    type: "лаб",
    groups: ["БСБО-01-19", "БСБО-02-19"],
  },
  {
    name: "кр. 17 н. Алгоритмы компонентов цифровой обработки данных",
    type: "пр",
    place: "301",
    groups: ["БСБО-01-19"],
  },
  {
    name: "кр. 17 н. Алгоритмы компонентов цифровой обработки данных",
    type: "пр",
    groups: ["БСБО-01-19"],
  },
  {}
];

const lessonsMap = (
  lesson: Lesson | {}, 
  lessonNumber: number
) => {
  return (
    <LessonCard
      key={lessonNumber}
      lessonNumber={lessonNumber}
      {...lesson}
    />
  );
}

function DayScreen() {
  return (
    <Screen header={<WeekTabs />} >
      <Stack>
        {lessons.map(lessonsMap)}
      </Stack>
    </Screen>
  );
}

export default DayScreen;
