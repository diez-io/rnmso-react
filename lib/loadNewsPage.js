// https://rnmso.ru/api/video/
export async function getNewsPostsLive() {
  const res = await fetch(`https://rnmso.ru/api/news`);
  const data = await res.json();
  return data.results.slice(0, 11);
}
export async function getAllNewsPostIds() {
  const res = await fetch(`https://rnmso.ru/api/news`);
  const data = await res.json();
  const paths = data.results.map((post) => ({
    params: { id: String(post.id) },
  }));
  return paths;
}
export async function getNewsPost(id) {
  const res = await fetch(`https://rnmso.ru/api/news/${id}/`);
  const data = await res.json();

  return data;
}
