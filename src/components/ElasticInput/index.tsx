import React, { useCallback, useEffect, useState } from 'react';
import Input from '@Components/UI/Input';
import { useAppSelector } from '@Hooks/redux';
import weatherSelector from '@Store/selectors';
import ElasticSelect from '@Components/ElasticSelect';
import getCities from '@API/cities';
import { CityName } from '@Interfaces';

import { ElasticInputProps } from './types/types';
import { ElasticInputContainer } from './styles';

function ElasticInput({ inputCity, setInputCity }: ElasticInputProps) {
  const { error } = useAppSelector(weatherSelector);

  const [cities, setCities] = useState<CityName[]>([]);
  const [isLoadingCities, setIsLoadingCities] = useState(false);
  const [isSelectVisible, setIsSelectVisible] = useState(false);

  async function getCitiesNames() {
    setIsLoadingCities(true);
    const citiesData: CityName[] = await getCities(inputCity);

    setCities(citiesData);

    setIsLoadingCities(false);
  }

  useEffect(() => {
    if (inputCity !== '') {
      getCitiesNames();
    }

    if (inputCity === '') {
      setIsSelectVisible(false);
      return;
    }

    setIsSelectVisible(true);
  }, [inputCity]);

  const onChangeHandler = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      const target = e.target as HTMLInputElement;

      setInputCity(target.value);
    },
    [],
  );

  return (
    <ElasticInputContainer>
      <Input
        error={error}
        onChange={onChangeHandler}
        value={inputCity}
        placeholder="Write country here"
      />
      {isSelectVisible && (
        <ElasticSelect
          setIsSelectVisible={setIsSelectVisible}
          setInputCity={setInputCity}
          isLoadingCities={isLoadingCities}
          cities={cities}
        />
      )}
    </ElasticInputContainer>
  );
}

export default ElasticInput;
