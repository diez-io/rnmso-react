export async function getPhotoPosts(slug) {
  if (slug) {
    const res = await fetch(`${process.env.API_URL}/photo?slug=${slug}`);
    const data = await res.json();
    return data;
  }
  const res = await fetch(`${process.env.API_URL}/photo`);
  const data = await res.json();
  return data;
}
export async function getPhotoPost(id) {
  const res = await fetch(`${process.env.API_URL}/photo?id=${id}`);
  const data = await res.json();

  return data;
}
export async function getAllPhotoPostIds() {
  const res = await fetch(`${process.env.API_URL}/photo`);
  const data = await res.json();
  const paths = data.map((post) => ({
    params: { id: post.id },
  }));
  return paths;
}
export async function loadPhotoTags() {
  const res = await fetch(`${process.env.API_URL}/tags`);
  const data = await res.json();

  return data;
}
export async function loadPhotoSlider() {
  const res = await fetch(`${process.env.API_URL}/photo_slider`);
  const data = await res.json();

  return data;
}
