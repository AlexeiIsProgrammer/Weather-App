import React, { useState } from 'react';
import Button from '@Components/UI/Button';
import { useAppSelector, useAppDispatch } from '@Hooks/redux';
import weatherSelector from '@Store/selectors';
import { weatherFetching } from '@Store/slices/weatherSlice';
import ElasticInput from '@Components/ElasticInput';

import { ElasticSearchContainer } from './styles';

function ElasticSearch() {
  const [inputCity, setInputCity] = useState<string>('');

  const { weather } = useAppSelector(weatherSelector);
  const dispatch = useAppDispatch();

  const searchCityHandler = () => {
    if (inputCity !== weather.location.name) {
      dispatch(weatherFetching(inputCity));
    }
  };

  return (
    <ElasticSearchContainer>
      <ElasticInput inputCity={inputCity} setInputCity={setInputCity} />
      <Button onClick={searchCityHandler}>Find Country</Button>
    </ElasticSearchContainer>
  );
}

export default ElasticSearch;
