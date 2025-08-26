import { useState, useEffect } from 'react';

interface LastPlayedSongInfo {
    title: string;
    artist: string;
    image: string;
    lastTimePlayed: string;
}

function useFetchLastPlayed() {
    const url = `${import.meta.env.VITE_BACKEND_URL}/dev/lastPlayed`;

    const [lastPlayedSong, setLastPlayedSong] = useState<LastPlayedSongInfo | null>(null);
    const [initialLoading, setInitialLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchSong = async () => {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error("Failed to track last played song.\n Please inform the Developer");

            const data = await response.json();
            setLastPlayedSong(data);

            setError(null); // clear error on success
        } catch (err) {
            const message = err instanceof TypeError
                ? "Cannot connect to the server. There may be issue with the backend or CORS.\nPlease infrom to Developer"
                : err instanceof Error
                    ? err.message
                    : "Unexpected error occurred.";

            setLastPlayedSong(null);
            setError(message);
        } finally {
            setInitialLoading(false);
        }
    };

    useEffect(() => {
        fetchSong();
    }, []);

    return { lastPlayedSong, refetch: fetchSong, initialLoading, error };
}

export default useFetchLastPlayed;
