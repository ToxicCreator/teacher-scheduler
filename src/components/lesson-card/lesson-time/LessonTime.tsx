import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import {LESSONS_TIME} from '../constants';


type Props = {
  lessonNumber: number
}

export default function LessonTime(props: Props) {
  const {lessonNumber} = props;
  const timeStyle = {
    textAlign: 'center' as const,
    fontSize: 16,
    fontWeight: 100
  };
  return (
    <article>
      <Stack>
        <Typography sx={timeStyle}>
          {LESSONS_TIME[lessonNumber].start}
        </Typography>
        <span style={timeStyle}>-</span>
        <Typography sx={timeStyle}>
          {LESSONS_TIME[lessonNumber].end}
        </Typography>
      </Stack>
    </article>
  );
}
