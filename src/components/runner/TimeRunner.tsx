import Runner from './Runner';


type Props = {
  start: Date,
  end: Date,
  step?: number
}

export default function TimeRunner(props: Props) {
  const {
    start,
    end,
    step = 1
  } = props;
  const max = getIntervalInMinutes(start, end);
  const value = getIntervalInMinutes(start, new Date());
  const delay = step * 1000 * 60;
  return (
    <Runner
      max={max}
      value={value}
      step={step}
      delay={delay}
    />
  );
}

function getIntervalInMinutes(start: Date, end: Date): number {
  // Два объекта даты, разница в минутах
  let interval = end.getTime() - start.getTime();
  return Math.round(interval / 1000 / 60);
}

