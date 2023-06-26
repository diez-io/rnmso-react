// https://rnmso.ru/api/soloists/
export async function getSoloists() {
  const res = await fetch(`https://rnmso.ru/api/soloists`);
  const data = await res.json();
  return data.results;
}
export async function getAllSoloistsSlugs() {
  const res = await fetch(`https://rnmso.ru/api/soloists`);
  const data = await res.json();
  const paths = data.results.map((post) => ({
    params: { slug: String(post.slug) },
  }));
  return paths;
}
export async function getSoloist(slug) {
  const res = await fetch(`https://rnmso.ru/api/soloists/${slug}/`);
  const data = await res.json();

  return data;
}
