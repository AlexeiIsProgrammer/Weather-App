export default async function getPosition() {
  const request = await fetch('https://ipinfo.io/json?token=108a74d0a35999');
  const jsonResponse = await request.json();

  return jsonResponse.city;
}
