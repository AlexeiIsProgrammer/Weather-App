import { Weather } from '../interfaces';

import type * as TestFunctions from '.';

const { getWeekDay, getShortTime, randomImageNumber, isWeatherExists } =
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
      input: {
        dateArg: new Date('May 10 2019 10:00:00'),
        includeSeconds: false,
      },
      output: '10:00',
    },
    {
      input: { dateArg: new Date('June 18 2017 12:15:00') },
      output: '12:15:00',
    },
  ];
  it.each(testCases)('should return correct $output', ({ input, output }) => {
    const { dateArg, includeSeconds } = input;
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

describe('isWeatherExists() should return if weather exists', () => {
  it("should return false, because weather hasn't any keys", () => {
    const testWeather: Weather = {} as Weather;
    expect(isWeatherExists(testWeather)).toBeFalsy();
  });
  it('should return true, because weather has data', () => {
    const testWeather: Weather = {
      location: {
        name: 'Minsk',
      },
      current: {
        temp_c: 36.8,
        condition: {
          icon: './sun.jpg',
          text: 'sunny',
        },
      },
      forecast: {
        forecastday: [
          {
            date: new Date('05-10-2023'),
            day: {
              avgtemp_c: 34.7,
              condition: {
                icon: './rain.jpeg',
                text: 'rainy',
              },
            },
            hour: [
              {
                time: '23:13:10',
                temp_c: 12.5,
                condition: {
                  icon: './coldy.png',
                  text: 'very cold',
                },
              },
            ],
          },
        ],
      },
    };
    expect(isWeatherExists(testWeather)).toBeTruthy();
  });
});
