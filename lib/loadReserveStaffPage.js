// https://rnmso.ru/api/reserve-members/
export async function getReserveStaff() {
  const res = await fetch(`https://rnmso.ru/api/reserve-members`);
  const data = await res.json();
  return data.results;
}
export async function getAllReserveStaffIds() {
  const res = await fetch(`https://rnmso.ru/api/reserve-members`);
  const data = await res.json();
  const paths = data.results.map((post) => ({
    params: { id: String(post.id) },
  }));
  return paths;
}
export async function getReserveStaffMember(id) {
  const res = await fetch(`https://rnmso.ru/api/reserve-members/${id}/`);
  const data = await res.json();

  return data;
}
export async function loadReserveStaffTags() {
  const res = await fetch(`https://rnmso.ru/api/member-groups`);
  const data = await res.json();

  return data.results;
}
export async function loadStaffAboutReserve() {
  const res = await fetch(`https://rnmso.ru/api/staff-reserve-header/`);
  const data = await res.json();

  return data.HEADER_HTML;
}
