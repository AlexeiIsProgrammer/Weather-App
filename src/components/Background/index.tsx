import getPosition from '@API/geolocation';
import { useAppDispatch, useAppSelector } from '@hooks/redux';
import { weatherPositionFetching } from '@store/reducers/weatherSlice';
import weatherSelector from '@store/selectors';
import React, { useEffect, useState } from 'react';
import { isWeatherExists } from '@utils/is-weather-exists';

import { BackgroundContainer } from './styles';

function Background() {
  const { weather, weatherImage } = useAppSelector(weatherSelector);
  const [isImgLoaded, setIsImgLoaded] = useState(false);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (!weather) {
      getPosition().then((pos) => {
        dispatch(weatherPositionFetching(pos));
      });
    }

    console.log('render use effect');
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
