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

  function fetchUserPosition() {
    setIsImgLoaded(false);
    getPosition().then((pos) => {
      dispatch(weatherPositionFetching(pos));
    });
  }

  useEffect(() => {
    if (!weather?.location?.name) {
      fetchUserPosition();
    }
  }, [dispatch]);

  useEffect(() => {
    if (weatherImage?.current === '') {
      fetchUserPosition();
      return;
    }

    setIsImgLoaded(false);
    const img = new Image();
    img.src =
      clickedDay === null
        ? weatherImage.current
        : weatherImage.days[clickedDay];
    img.onload = () => {
      setImage(img.src);
      setIsImgLoaded(true);
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
