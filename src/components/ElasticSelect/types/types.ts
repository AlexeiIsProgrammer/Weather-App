import { CityName } from '@Interfaces';

export type ElasticSelectProps = {
  setIsSelectVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setInputCity: React.Dispatch<React.SetStateAction<string>>;
  isLoadingCities: boolean;
  cities: CityName[];
};
