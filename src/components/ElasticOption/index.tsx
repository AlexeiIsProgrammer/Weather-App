import React from 'react';
import { useAppDispatch } from '@Hooks/redux';
import { weatherFetching } from '@Store/slices/weatherSlice';

import { ElasticOptionContainer } from './styles';
import { ElasticOptionsProps } from './types/types';

function ElasticOption({ name, country, setInputCity }: ElasticOptionsProps) {
  const dispatch = useAppDispatch();
  const optionClickHandler = () => {
    const searchString = `${name} ${country}`;
    setInputCity(name);

    dispatch(weatherFetching(searchString));
  };

  return (
    <ElasticOptionContainer onClick={optionClickHandler}>
      {name}
      {' '}
      {country}
    </ElasticOptionContainer>
  );
}

export default ElasticOption;
