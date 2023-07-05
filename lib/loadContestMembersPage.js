// https://rnmso.ru/api/contest/members/
export async function getContestMembers() {
  const res = await fetch(`https://rnmso.ru/api/contest/members`);
  const data = await res.json();
  return data.results;
}
// export async function getAllStaffIds() {
//   const res = await fetch(`https://rnmso.ru/api/contest/members`);
//   const data = await res.json();
//   const paths = data.results.map((post) => ({
//     params: { id: String(post.id) },
//   }));
//   return paths;
// }
export async function getContestMember(id) {
  // const res = await fetch(`https://rnmso.ru/api/orchestra-members/${id}/`);
  const res = await fetch(`${process.env.API_URL}/member`);
  const data = await res.json();

  return data;
}
