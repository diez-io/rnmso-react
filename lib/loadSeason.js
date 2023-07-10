const apiUrl = process.env.NEXT_PUBLIC_API_URL_LIVE;

export async function loadSeason() {
    const res = await fetch(`${apiUrl}/seasons`);
    const data = await res.json();

    return data;
}