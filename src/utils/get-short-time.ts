const addZeroToEnd = (time: number) => `0${time}`.slice(-2);

export const getShortTime = (
  dateArg: string | Date,
  includeSeconds = true
): string => {
  const date = new Date(dateArg);

  return `${addZeroToEnd(date.getHours())}:${addZeroToEnd(date.getMinutes())}${
    includeSeconds ? `:${addZeroToEnd(date.getSeconds())}` : ''
  }`;
};
