import React from 'react'

function Stars() {
    const userName: string = "layer01";
    const url: string = `${import.meta.env.VITE_BACKEND_URL}/codechef/${userName}`;
    const [rating, setRating] = React.useState<string>("");
    React.useEffect(() => {
        async function fetchRating() {
            try {
                const res = await fetch(url);
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                const data = await res.json();
                setRating(data.stars);
            } catch (error) {
                setRating("");
            }
        }
        fetchRating();
    }, [userName]);

  return (
        <div className='w-full text-start text-xl text-amber-300 hover:text-2xl hover:text-amber-400 transition-all duration-300 overflow-clip'>{rating}</div>
    )
}

export default Stars