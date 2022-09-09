export const createTime = (
  hours: number, 
  minutes: number
): Date => {
  const time = new Date();
  time.setHours(hours);
  time.setMinutes(minutes);
  return time;
}