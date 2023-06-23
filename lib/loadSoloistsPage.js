// https://rnmso.ru/api/soloists/
export async function getSoloists() {
  const res = await fetch(`https://rnmso.ru/api/soloists`);
  const data = await res.json();
  return data.results;
}
export async function getAllSoloistsIds() {
  const res = await fetch(`https://rnmso.ru/api/soloists`);
  const data = await res.json();
  const paths = data.results.map((post) => ({
    params: { id: String(post.id) },
  }));
  return paths;
}
export async function getSoloist(slug) {
  const res = await fetch(`https://rnmso.ru/api/soloists/${slug}/`);
  const data = await res.json();

  return data;
}
