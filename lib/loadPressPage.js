// https://rnmso.ru/api/video/
export async function getPressPostsLive() {
  const res = await fetch(`https://rnmso.ru/api/press`);
  const data = await res.json();
  return data.results.slice(0, 11);
}
export async function getAllPressPostIds() {
  const res = await fetch(`https://rnmso.ru/api/press`);
  const data = await res.json();
  const paths = data.results.map((post) => ({
    params: { id: String(post.id) },
  }));
  return paths;
}
export async function getPressPost(id) {
  const res = await fetch(`https://rnmso.ru/api/press/${id}/`);
  const data = await res.json();

  return data;
}
