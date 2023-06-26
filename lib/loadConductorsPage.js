// https://rnmso.ru/api/conductors/
export async function getConductors() {
  const res = await fetch(`https://rnmso.ru/api/conductors`);
  const data = await res.json();
  return data.results;
}
export async function getAllConductorsSlugs() {
  const res = await fetch(`https://rnmso.ru/api/conductors`);
  const data = await res.json();
  const paths = data.results.map((post) => ({
    params: { slug: String(post.slug) },
  }));
  return paths;
}
export async function getConductor(slug) {
  const res = await fetch(`https://rnmso.ru/api/conductors/${slug}/`);
  const data = await res.json();

  return data;
}
