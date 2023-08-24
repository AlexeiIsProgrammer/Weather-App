import axios from 'axios';
import { Geolocation } from '../models/geolocation';

export default async function getPosition() {
  const response = await axios.get<Geolocation>(
    `https://ipinfo.io/json?token=${process.env.REACT_APP_POSITION_TOKEN}`,
  );

  return response.data.city;
}
