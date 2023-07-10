export async function loadNewsMain() {
  const res = await fetch(`${process.env.API_URL_LIVE}/news?limit=4`);
  const data = await res.json();
  return data.results;
}
