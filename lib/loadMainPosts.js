export async function loadAfisha() {
  console.log(process.env.API_URL);
  const res = await fetch(`${process.env.API_URL}/afisha`);
  const data = await res.json();

  return data;
}
export async function loadOrchestra() {
  const res = await fetch(`${process.env.API_URL}/orchestra`);
  const data = await res.json();

  return data;
}
export async function loadMasters() {
  const res = await fetch(`${process.env.API_URL}/masters`);
  const data = await res.json();

  return data;
}
export async function loadNews() {
  const res = await fetch(`${process.env.API_URL}/news`);
  const data = await res.json();

  return data;
}
export async function loadVideo() {
  const res = await fetch(`${process.env.API_URL}/video`);
  const data = await res.json();

  return data;
}
export async function loadPhoto() {
  const res = await fetch(`${process.env.API_URL}/photo`);
  const data = await res.json();

  return data;
}
export async function loadPhotoSlider() {
  const res = await fetch(`${process.env.API_URL}/photo_slider`);
  const data = await res.json();

  return data;
}
