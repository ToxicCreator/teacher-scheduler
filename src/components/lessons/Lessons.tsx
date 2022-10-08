import {Paper} from "@mui/material";
import Stack from "@mui/material/Stack";
import {LessonCard} from "components/lesson-card";
import type {LessonType} from "types";


type Props = {
  lessons: LessonType[]
}

function Lessons(props: Props) {
  const {lessons} = props;
  let children = (
    <Paper
      elevation={0}
      sx={{
        p: 2,
        // backgroundColor: 'transparent',
        fontSize: '20px',
        textAlign: 'center'
      }}
    >
      Нет пар ;)
    </Paper>
  );
  if (lessons.length) {
    (children as any) = lessons.map((lesson: LessonType) => {
      return (
        <LessonCard key={lesson.number} {...lesson} />
      );
    })
  }
  return (
    <Stack>
      {children}
    </Stack>
  );
}

export default Lessons;
