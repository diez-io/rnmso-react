const apiUrl = process.env.NEXT_PUBLIC_API_URL_LIVE;

export async function loadPhoto(params) {
  if(params) {
    const res = await fetch(`${apiUrl}/gallery/?${params}`);
    const data = await res.json();
    return data.results;
  }else{
    const res = await fetch(`${apiUrl}/gallery/`);
    const data = await res.json();
    return data.results;
  }
}
export async function loadPhotoTags(){
  const res = await fetch(`${apiUrl}/gallery-tags/`);
  const data = await res.json();
  return data.results;
}
export async function loadAllPhotoIds() {
  const res = await fetch(`${apiUrl}/gallery`);
  const data = await res.json();
  const paths = data.results.map((post) => ({
    params: { id: String(post.id) },
  }));
  return paths;
}
export async function loadPhotoPost(id){
  const res = await fetch(`${apiUrl}/gallery/${id}`);
  const data = await res.json();
  return data;
}
