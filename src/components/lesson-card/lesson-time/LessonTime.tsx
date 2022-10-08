import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import {LESSONS_TIME} from '../constants';


type Props = {
  number: number
}

export default function LessonTime(props: Props) {
  const {number} = props;
  const timeStyle = {
    textAlign: 'center' as const,
    fontSize: 16,
    fontWeight: 100
  };
  return (
    <article>
      <Stack>
        <Typography sx={timeStyle}>
          {LESSONS_TIME[number].start}
        </Typography>
        <span style={timeStyle}>-</span>
        <Typography sx={timeStyle}>
          {LESSONS_TIME[number].end}
        </Typography>
      </Stack>
    </article>
  );
}
