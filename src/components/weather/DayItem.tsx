import React, { useState } from 'react';
import { Forecastday } from '../../types/weather';
import { getWeekDay } from '../../utils';
import Hours from './Hours';

type DayProps = {
  weather: Forecastday;
};

function DayItem({ weather }: DayProps) {
  const [isHourStat, setIsHourStat] = useState<boolean>(false);

  function hourStatistic() {
    setIsHourStat(!isHourStat);
  }

  return (
    <div className="day" onClick={hourStatistic}>
      <div>{getWeekDay(weather.date)}</div>
      <div>
        <img src={weather.day.condition.icon} alt="weather" />
      </div>
      <div>
        {weather.day.avgtemp_c}
        °C
      </div>

      {isHourStat ? <Hours hours={weather.hour} /> : null}
    </div>
  );
}

export default DayItem;
