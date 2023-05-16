export async function loadAfishaPage() {
    const res = await fetch(process.env.API_URL + '/afisha_page');
    const data = await res.json();

    return data;
}