import { RootState } from '..';

const weatherSelector = (state: RootState) => state.weatherReducer;

export default weatherSelector;
