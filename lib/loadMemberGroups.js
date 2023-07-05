export async function loadMemberGroups() {
  const res = await fetch(`https://rnmso.ru/api/member-groups`);
  const data = await res.json();

  return data.results;
}
