// https://rnmso.ru/api/contest/jury/
export async function getContestJury() {
  const res = await fetch(`https://rnmso.ru/api/contest/jury`);
  const data = await res.json();
  return data.results;
}
