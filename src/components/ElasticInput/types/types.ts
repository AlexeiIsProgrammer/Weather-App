export type ElasticInputProps = {
  timer: number | NodeJS.Timeout;
  setTimer: React.Dispatch<React.SetStateAction<number | NodeJS.Timeout>>;
  inputCity: string;
  setInputCity: React.Dispatch<React.SetStateAction<string>>;
};
