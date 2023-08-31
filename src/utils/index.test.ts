import type * as TestFunctions from '.';

const { getWeekDay, getShortTime, randomImageNumber } =
  jest.requireActual<typeof TestFunctions>('./index.ts');
describe('getWeekDay() should return correct dates', () => {
  const testCases = [
    {
      input: new Date('Thu Jan 26 2017 11:00:00'),
      output: 'Thu',
    },
    {
      input: new Date('May 10 2019 11:00:00'),
      output: 'Fri',
    },
    {
      input: new Date('Mar 19 2011'),
      output: 'Sat',
    },
    {
      input: new Date('Jun 11 2023'),
      output: 'Sun',
    },
    {
      input: new Date('May 18 2021'),
      output: 'Tue',
    },
    {
      input: new Date('Feb 10 2020'),
      output: 'Mon',
    },
    {
      input: new Date('Apr 17 2019'),
      output: 'Wed',
    },
  ];
  it.each(testCases)(
    'should return correct day: $output',
    ({ input, output }) => {
      expect(getWeekDay(input)).toBe(output);
    }
  );
});

describe("getShortTime() should return time with zero's if possible", () => {
  const testCases = [
    {
      input: { dateArg: 'May 10 2019 23:1:1', includeSeconds: true },
      output: '23:01:01',
    },
    {
      input: { dateArg: new Date('May 10 2019 10:00:00') },
      output: '10:00',
    },
  ];
  it.each(testCases)('should return correct $output', ({ input, output }) => {
    const { dateArg, includeSeconds = false } = input;
    expect(getShortTime(dateArg, includeSeconds)).toBe(output);
  });
});

describe('randomImageNumber() should return random number in diapasone', () => {
  it('should return correct random number in diapasone od 0...$input', () => {
    const input = 10;
    expect(randomImageNumber(input)).toBeLessThan(input);
    expect(randomImageNumber(input)).toBeGreaterThanOrEqual(0);
  });
});
