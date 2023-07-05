// https://rnmso.ru/api/contest/orchestral-difficulties/
export async function getContestDifficulties() {
  const res = await fetch(`https://rnmso.ru/api/contest/orchestral-difficulties`);
  const data = await res.json();
  return data.results;
}
