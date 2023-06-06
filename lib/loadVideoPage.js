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
