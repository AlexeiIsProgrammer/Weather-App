export default async function getPosition() {
  const request = await fetch(
    `https://ipinfo.io/json?token=${process.env.REACT_APP_POSITION_TOKEN}`,
  );
  const jsonResponse = await request.json();

  return jsonResponse.city;
}
