import { useState } from 'react';
import { HiOutlineRefresh } from "react-icons/hi";
import { useTheme } from '../../services/ThemeProvider';
import useFetchLastPlayed from '../../utils/FetchLastPlayed';

function BeyondCode() {
    const { theme } = useTheme();
    const [loading, setLoading] = useState(false);
    const { lastPlayedSong, refetch, initialLoading, error } = useFetchLastPlayed();
    const handleRefresh = async () => {
        setLoading(true);
        try {
            await refetch();
        } catch {
            // no need to set error here; already handled in hook
        }
        setLoading(false);
    };

    return (
        <div className="w-full mx-auto flex flex-col gap-y-2 mb-20">
            <div className="w-full flex items-start justify-between">
                <h1>Last Played Song</h1>
                <button className='cursor-pointer' onClick={handleRefresh}>
                    <HiOutlineRefresh className={`inline ${loading ? 'animate-spin' : ''}`} /> refresh
                </button>
            </div>

            {initialLoading ? (
                <div className='w-full h-20 flex items-center justify-center'>
                    <div className={`loader-${theme}`}></div>
                </div>
            ) : error ? (
                <div className="w-full h-20 flex items-center justify-center text-red-500 font-semibold">
                    {error}
                </div>
            ) : lastPlayedSong ? (
                <div>
                    <div className={`w-full h-20 grid border border-neutral-700 rounded-xl grid-cols-8 grid-rows-1 items-center justify-items-center group`}>

                        <div className="relative col-span-1 flex items-center justify-center">
                            <img
                                src={lastPlayedSong.image}
                                alt=""
                                className='ml-1.5 rounded-full object-cover w-15 aspect-auto shadow-md border-2 border-transparent 
                            group-hover:border-current transition-all duration-500 ease-in-out animate-pulse'
                            />
                            {lastPlayedSong.lastTimePlayed == 'Playing now...' ? (
                                <div className="absolute bottom-1 right-1 w-3 h-3 bg-green-500 rounded-full animate-ping" />
                            ) : (
                                <div className="absolute bottom-1 right-1 w-3 h-3 bg-gray-400 rounded-full opacity-60" />
                            )}
                        </div>

                        <div className="col-span-7  w-full flex flex-col items-start justify-center pl-4 ">
                            <h1 className={`w-full text-lg  font-bold tracking-wide leading-tight truncate
                            ${theme === 'dark' ? 'text-white' : 'text-gray-900'} `}>
                                {lastPlayedSong.title}
                            </h1>
                            <p className={`w-full text-sm tracking-wide opacity-80 truncate
                            ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                                {lastPlayedSong.artist}
                            </p>
                            <h1 className='hidden sm:block'>{lastPlayedSong.lastTimePlayed}</h1>
                        </div>
                    </div>
                    <h1 className='block sm:hidden'>{lastPlayedSong.lastTimePlayed}</h1>
                </div>
            ) : (
                <div className="w-full h-20 flex items-center justify-center text-gray-400">
                    No song data available.
                </div>
            )}
        </div>
    );
}

export default BeyondCode;
