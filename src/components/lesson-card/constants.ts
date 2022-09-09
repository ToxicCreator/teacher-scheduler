import {createTime} from "utils";
import type {LessonTime} from "./lesson-time/types";


export const LESSON_TYPES = {
  LECTURE: 'лек',
  PRACTICE: 'пр',
  LAB: 'лаб'
};

export const LESSONS_TIME: LessonTime[] = [
  {
    start: '09:00',
    end: '10:30',
    startDate: createTime(18, 0),
    endDate: createTime(22, 0)
  },
  {
    start: '10:40',
    end: '12:10',
    startDate: createTime(10, 40),
    endDate: createTime(12, 10)
  },
  {
    start: '12:40',
    end: '14:10',
    startDate: createTime(12, 40),
    endDate: createTime(14, 10)
  },
  {
    start: '14:20',
    end: '15:50',
    startDate: createTime(14, 20),
    endDate: createTime(15, 50)
  },
  {
    start: '16:20',
    end: '17:50',
    startDate: createTime(16, 20),
    endDate: createTime(17, 50)
  },
  {
    start: '18:00',
    end: '19:30',
    startDate: createTime(18, 0),
    endDate: createTime(19, 30)
  }
];