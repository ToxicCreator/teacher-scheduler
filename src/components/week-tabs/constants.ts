import {WEEK_DAYS} from "mainConstants";
import {WeekDayTab} from "./types";


export const WEEK_DAY_TABS: WeekDayTab[] = [
  {
    value: WEEK_DAYS.MONDAY,
    label: 'ПН',
    longLabel: 'Понедельник'
  },
  {
    value: WEEK_DAYS.TUESDAY,
    label: 'ВТ',
    longLabel: 'Вторник'
  },
  {
    value: WEEK_DAYS.WEDNESDAY,
    label: 'СР',
    longLabel: 'Среда'
  },
  {
    value: WEEK_DAYS.THURSDAY,
    label: 'ЧТ',
    longLabel: 'Четверг'
  },
  {
    value: WEEK_DAYS.FRIDAY,
    label: 'ПТ',
    longLabel: 'Пятница'
  },
  {
    value: WEEK_DAYS.SATURDAY,
    label: 'СБ',
    longLabel: 'Суббота'
  }
];