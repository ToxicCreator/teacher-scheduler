import {WEEK_DAYS} from "mainConstants";


// Пара
export type LessonType = {
  number: number,
  name: string,
  type?: string,
  place?: string,
  groups?: string[]
};

// Пары в день
export type DayLessonsType = {
  day: string,
  lessons: LessonType[];
};