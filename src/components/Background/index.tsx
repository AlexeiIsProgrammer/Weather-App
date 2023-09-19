import React, { useEffect, useState } from 'react';

import { BackgroundContainer } from './styles';

import getPosition from '~API/geolocation';
import { useAppDispatch, useAppSelector } from '~Hooks/redux';
import { weatherPositionFetching } from '~Store/slices/weatherSlice';
import weatherSelector from '~Store/selectors';
import { isWeatherExists } from '~Utils/is-weather-exists';

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
