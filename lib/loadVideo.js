const apiUrl = process.env.NEXT_PUBLIC_API_URL_LIVE;

export async function loadVideo(params) {
  if(params) {
    const res = await fetch(`${apiUrl}/video?${params}`);
    const data = await res.json();

    return data.results;
  }else{
    const res = await fetch(`${apiUrl}/video`);
    const data = await res.json();

    return data.results;
  }
}
export async function loadVideoTags(){
  const res = await fetch(`${apiUrl}/gallery-tags/`);
  const data = await res.json();
  return data.results;
}
export async function loadAllVideoIds() {
  const res = await fetch(`${apiUrl}/video`);
  const data = await res.json();
  const paths = data.results.map((post) => ({
    params: { id: String(post.id) },
  }));
  return paths;
}
export async function loadVideoPost(id){
  const res = await fetch(`${apiUrl}/video/${id}`);
  const data = await res.json();
  return data;
}
