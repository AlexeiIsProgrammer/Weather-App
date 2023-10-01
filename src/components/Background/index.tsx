import React, { useEffect, useState } from 'react';
import getPosition from '@API/geolocation';
import { useAppDispatch, useAppSelector } from '@Hooks/redux';
import { weatherPositionFetching } from '@Store/slices/weatherSlice';
import weatherSelector from '@Store/selectors';
import { isWeatherExists } from '@Utils/is-weather-exists';
import Spinner from '@Components/Spinner';

import { BackgroundContainer } from './styles';

function Background() {
  const { weather, weatherImage, clickedDay } = useAppSelector(weatherSelector);
  const [isImgLoaded, setIsImgLoaded] = useState<boolean>(false);
  const [image, setImage] = useState<string>('');

  const dispatch = useAppDispatch();
  useEffect(() => {
    if (!weather?.location?.name) {
      setIsImgLoaded(false);
      getPosition().then((pos) => {
        dispatch(weatherPositionFetching(pos));
      });
    }
  }, [dispatch]);

  useEffect(() => {
    setIsImgLoaded(false);
    const img = new Image();
    img.src = clickedDay === null
      ? weatherImage.current
      : weatherImage.days[clickedDay];
    img.onload = () => {
      setIsImgLoaded(true);
      setImage(img.src);
    };
  }, [weatherImage, clickedDay]);

  return isImgLoaded ? (
    <BackgroundContainer
      $backgroundImage={isWeatherExists(weather) ? `url('${image}')` : ''}
      $isLoaded={isImgLoaded}
    />
  ) : (
    <Spinner />
  );
}

export default Background;
