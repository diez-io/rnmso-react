const apiUrl = process.env.NEXT_PUBLIC_API_URL_LIVE;

export async function loadStaff() {
  const res = await fetch(`${apiUrl}/orchestra-members`);
  const data = await res.json();
  return data.results;
}
export async function loadAllStaffIds() {
  const res = await fetch(`${apiUrl}/orchestra-members`);
  const data = await res.json();
  const paths = data.results.map((post) => ({
    params: { id: String(post.id) },
  }));
  return paths;
}
export async function loadStaffMember(id) {
  //const res = await fetch(`https://rnmso.ru/api/orchestra-members/${id}/`);
  const res = await fetch(`${apiUrl}/orchestra-members/${id}/`);
  const data = await res.json();

  return data;
}
