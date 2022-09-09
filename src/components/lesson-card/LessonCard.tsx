import cc from 'classnames';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TimeRunner from 'components/runner/TimeRunner';
import LessonTime from './lesson-time/LessonTime';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import {LESSONS_TIME, LESSON_TYPES} from './constants';
import type {Lesson} from './types';
import styles from './LessonCard.module.css';


const unknown = '???'
const typeColor = {
  [LESSON_TYPES.LAB]: 'linear-gradient(to right top, #1fd48d, #00daad, #00dfca, #2ee2e1, #5be5f2)',
  [LESSON_TYPES.PRACTICE]: 'linear-gradient(to right top, #9d3203, #b24b04, #c66306, #d97c0a, #eb9612)',
  [LESSON_TYPES.LECTURE]: 'linear-gradient(to right top, #1f66d4, #008ae9, #00abf1, #00c9f3, #5be5f2)'
}

export default function LessonCard(props: Lesson) {
  const {
    lessonNumber,
    name = null,
    type,
    place = unknown,
    groups
  } = props;
  return (
    <section className={styles.root}>
      <div className={cc(styles.info, !name && styles.disebled)}>
        <Grid 
          container
          direction="row"
          columnSpacing={3}
        >
          <Grid item xs={2.5}>
            <LessonTime lessonNumber={lessonNumber} />
          </Grid>
          {name && (
            <Grid
              item xs
              container
              rowSpacing={2}
              columnSpacing={2}
              justifyContent="space-between"
            >
              <Grid item xs>
                <Typography sx={{
                    fontSize: 16,
                    fontWeight: 500
                  }}
                >
                  {name}
                </Typography>
              </Grid>
              <Grid item xs={3.5} sm={2} md={1}>
                <Chip 
                  sx={{
                    minWidth: 45,
                    fontWeight: 500,
                    backgroundImage: type && typeColor[type]
                  }}
                  label={type}
                  color="primary"
                />
              </Grid>
              <Grid item xs={12}>
                <Typography sx={{ fontSize: 16 }}>
                  ауд: {place}
                </Typography>
              </Grid>
            </Grid>
          )}
        </Grid>
      </div>
      {groups && (
        <article className={styles.groups}>
          {groups.map((group, i) => (
            <span
              key={i + group}
              className={styles.group}
            >
              {group}
            </span>
          ))}
        </article>
      )}
      <TimeRunner
        start={LESSONS_TIME[lessonNumber].startDate}
        end={LESSONS_TIME[lessonNumber].endDate}
      />
    </section>
  );
}
