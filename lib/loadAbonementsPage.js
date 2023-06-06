export async function loadAbonementPosts() {
  const res = await fetch(`${process.env.API_URL}/abonements`);
  const data = await res.json();

  return data;
}
