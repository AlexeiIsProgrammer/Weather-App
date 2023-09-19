import getPosition from '@API/geolocation';
import { useAppDispatch, useAppSelector } from '@Hooks/redux';
import { weatherPositionFetching } from '@Store/slices/weatherSlice';
import weatherSelector from '@Store/selectors';
import React, { useEffect, useState } from 'react';
import { isWeatherExists } from '@Utils/is-weather-exists';

import { BackgroundContainer } from './styles';

function Background() {
  const { weather, weatherImage } = useAppSelector(weatherSelector);
  const [isImgLoaded, setIsImgLoaded] = useState(false);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (!weather.location.name) {
      getPosition().then((pos) => {
        dispatch(weatherPositionFetching(pos));
      });
    }
  }, [dispatch]);

  useEffect(() => {
    setIsImgLoaded(false);
    const img = new Image();
    img.src = weatherImage;
    img.onload = () => setIsImgLoaded(true);
  }, [weatherImage]);

  return (
    <BackgroundContainer
      $backgroundImage={
        isWeatherExists(weather) ? `url('${weatherImage}')` : ''
      }
      $isLoaded={isImgLoaded}
    />
  );
}

export default Background;
