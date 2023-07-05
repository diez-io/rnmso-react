export async function loadSpecialities() {
  const res = await fetch(`https://rnmso.ru/api/contest/specialities/`);
  const data = await res.json();

  return data.results;
}
