export async function getAfishaPosts(slug) {
  if (slug) {
    const res = await fetch(`${process.env.API_URL}/afisha_page?slug=${slug}`);
    const data = await res.json();
    return data;
  } else {
    const res = await fetch(`${process.env.API_URL}/afisha_page`);
    const data = await res.json();
    return data;
  }
}
export async function loadAfishaTags() {
  const res = await fetch(`${process.env.API_URL}/posterTags`);
  const data = await res.json();

  return data;
}
export async function getAfishaPost(id) {
  const res = await fetch(`${process.env.API_URL}/afisha_page?id=${id}`);
  const data = await res.json();

  return data;
}
