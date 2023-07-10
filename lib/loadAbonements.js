const apiUrl = process.env.NEXT_PUBLIC_API_URL_LIVE;

export async function loadAbonements(params) {
    if(params){
        const res = await fetch(`${apiUrl}/subscription?${params}`);
        if (!res.ok) {
            throw new Error('Failed to fetch data')
        }
        const data = await res.json();

        return data.results;
    }else{
       const res = fetch(`${apiUrl}/seasons`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const season = data.current_season;
                return fetch(`${apiUrl}/subscription?season=${season}`)
            })
           .then(res => res.json());

        const data = await res;

        return data.results;
    }
}