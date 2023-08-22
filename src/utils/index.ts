export const getShortTime = (date: Date) => {
  const addZeroToEnd = (time: number) => `0${time}`.slice(-2);

  return `${addZeroToEnd(date.getHours())}:${addZeroToEnd(
    date.getMinutes(),
  )}:${addZeroToEnd(date.getSeconds())}`;
};

export const getWeekDay = (date: Date) => {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return days[new Date(date).getDay()];
};
