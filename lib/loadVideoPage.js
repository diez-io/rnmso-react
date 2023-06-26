export async function getVideoPosts(slug) {
  if (slug) {
    const res = await fetch(`${process.env.API_URL}/video?slug=${slug}`);
    const data = await res.json();
    return data;
  }
  const res = await fetch(`${process.env.API_URL}/video`);
  const data = await res.json();
  return data;
}
export async function getVideoPost(id) {
  const res = await fetch(`${process.env.API_URL}/video?id=${id}`);
  const data = await res.json();

  return data;
}
export async function getAllVideoPostIds() {
  const res = await fetch(`${process.env.API_URL}/video`);
  const data = await res.json();
  const paths = data.map((post) => ({
    params: { id: post.id },
  }));
  return paths;
}
export async function loadVideoTags() {
  const res = await fetch(`${process.env.API_URL}/tags`);
  const data = await res.json();

  return data;
}
//https://rnmso.ru/api/video/
export async function getVideoPostsLive(slug) {
  if (slug) {
    const res = await fetch(`https://rnmso.ru/api/video?tags=${slug}`);
    const data = await res.json();
    return data.results;
  }
  const res = await fetch(`https://rnmso.ru/api/video`);
  const data = await res.json();
  return data.results.slice(0, 11);
}
