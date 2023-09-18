import getRandomBackground from '@API/background';
import getPosition from '@API/geolocation';
import axios from 'axios';

jest.mock('axios');

describe('background API testing', () => {
  it('should call background API', async () => {
    axios.get.mockResolvedValue();

    await expect(getRandomBackground('sunny')).toBeInstanceOf('string');
  });

  it('should return url value', async () => {
    const data = await getRandomBackground('Sunny');
    const url = 'https://images.unsplash.com';
    expect(data).toMatch(`/${url}/`);
  });
});

describe('geoposition API testing', () => {
  it('should return string value', async () => {
    const data = await getPosition();
    expect(data).toEqual(expect.any(String));
    expect(data).toBeTruthy();
  });
});
