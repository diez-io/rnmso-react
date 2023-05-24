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
export async function loadReccomendedAfishaPosts() {
  const res = await fetch(`${process.env.API_URL}/afishaRecommendedPosts`);
  const data = await res.json();

  return data;
}
export async function loadAbonementPosts() {
  const res = await fetch(`${process.env.API_URL}/abonements`);
  const data = await res.json();

  return data;
}
export async function loadAbonementPost(id) {
  const res = await fetch(`${process.env.API_URL}/abonements?id=${id}`);
  const data = await res.json();

  return data;
}
export async function getAfishaPost(id) {
  const res = await fetch(`${process.env.API_URL}/afisha_post?id=${id}`);
  const data = await res.json();

  return data;
}
export async function getAllAfishaPostIds() {
  const res = await fetch(`${process.env.API_URL}/afisha_post`);
  const data = await res.json();
  // const pathsMonths = data.reduce((postsPrev, posts) => [
  //   ...postsPrev.posts,
  //   ...posts.posts,
  // ]);
  const paths = data.map((post) => ({
    params: { id: post.id },
  }));
  return paths;
}
