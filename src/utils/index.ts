export const getShortTime = (dateArg: string, includeSeconds = true) => {
  const date = new Date(dateArg);
  const addZeroToEnd = (time: number) => `0${time}`.slice(-2);

  return `${addZeroToEnd(date.getHours())}:${addZeroToEnd(date.getMinutes())}${
    includeSeconds ? `:${addZeroToEnd(date.getSeconds())}` : ''
  }`;
};

export const getWeekDay = (date: Date) => {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return days[new Date(date).getDay()];
};
