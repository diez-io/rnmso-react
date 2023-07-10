const apiUrl = process.env.NEXT_PUBLIC_API_URL_LIVE;

export async function loadAfisha(params) {
  if(params){
    const res = await fetch(`${apiUrl}/concerts?${params}`);
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    const data = await res.json();

    return data.results;
  }else{
    const res = await fetch(`${apiUrl}/concerts`);
    const data = await res.json();

    return data.results;
  }
}
export async function loadAfishaTags() {
  const res = await fetch(`${apiUrl}/concert_tags`);
  const data = await res.json();

  return data.results;
}
export async function loadAllAfishaIds() {
  const res = await fetch(`${apiUrl}/concerts`);
  const data = await res.json();
  const paths = data.results.map((post) => ({
    params: { id: post.id.toString() },
  }));
  return paths;
}
export async function loadAfishaPost(id) {
  const res = await fetch(`${apiUrl}/concerts/${id}/`);
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  const data = await res.json();
  return data;
}