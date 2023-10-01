import React from 'react';
import ElasticOption from '@Components/ElasticOption';

import {
  CloseSelectButton,
  ElasticSelectContainer,
  SelectResultState,
} from './styles';
import { ElasticSelectProps } from './types/types';

function ElasticSelect({
  setIsSelectVisible,
  setInputCity,
  isLoadingCities,
  cities,
}: ElasticSelectProps) {
  let content: JSX.Element | JSX.Element[];

  switch (true) {
    case isLoadingCities:
      content = <SelectResultState>Loading...</SelectResultState>;
      break;

    case cities.length === 0:
      content = <SelectResultState>Empty</SelectResultState>;
      break;

    default:
      content = cities.map((option) => (
        <ElasticOption
          key={option.id}
          name={option.name}
          country={option.country}
          setInputCity={setInputCity}
        />
      ));
      break;
  }

  return (
    <ElasticSelectContainer>
      {content}
      <CloseSelectButton
        title="Close"
        onClick={() => setIsSelectVisible(false)}
      />
    </ElasticSelectContainer>
  );
}

export default ElasticSelect;
