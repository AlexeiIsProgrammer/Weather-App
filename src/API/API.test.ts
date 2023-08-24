import getRandomBackground from './background';
import getPosition from './geolocation';

describe('background API testing', () => {
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
