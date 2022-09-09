import {useState, useEffect, useRef} from 'react';
import cc from 'classnames';
import styles from './Runner.module.css';


type Props = {
  min?: number,
  max?: number,
  value?: number,
  step?: number,
  delay: number
}

export default function Runner(props: Props) {
  const {
    min = 0,
    max = 100,
    value = 0,
    step = 1,
    delay
  } = props;
  const intervalId = useRef('');
  const [runner, setRunner] = useState(value);
  const isFinished = runner >= max || runner <= min;
  useEffect(() => {
    (intervalId.current as any) = setInterval(() => {
      setRunner((runner) => (runner + step));
    }, delay);
    return () => clearInterval(intervalId.current);
  }, []);
  useEffect(() => {
    if (runner >= max || runner <= min) {
      clearInterval(intervalId.current);
    }
  }, [runner])
  if (min < 0 || max < 0) {
    throw TypeError('min < 0 or max < 0');
  }
  if (min > max) {
    throw RangeError('min > max');
  }
  const runnerPercent = runner * 100 / max;
  return (
    <div className={cc(styles.root, isFinished && styles.finished)}>
      <div
        className={styles.runner}
        style={{ width: `${runnerPercent}%` }}
      />
    </div>
  );
}
