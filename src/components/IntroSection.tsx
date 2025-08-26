import { useState, useEffect } from 'react';
import AnimateText from '../utils/AnimateTxt';
import { MdLocationPin } from "react-icons/md";
import { BsAlarm } from "react-icons/bs";
import MagnifierImage from './MagnifierImage';
import { useTheme } from '../services/ThemeProvider';
import admin from '/assets/adminPic.png'



function IntroSection() {
    const getTime = () => new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
    const [time, setTime] = useState(getTime());
    const resumeId = `107q-skxbYeXlxoRwFFhYM5KBd2WPgixx`;
    const { theme } = useTheme();

    useEffect(() => {
        const tick = () => setTime(getTime());
        const now = new Date();
        const msToNextMinute = (60 - now.getSeconds()) * 1000 - now.getMilliseconds();
        const timeout = setTimeout(() => {
            tick();
            setInterval(tick, 60000);
        }, msToNextMinute);
        return () => {
            clearTimeout(timeout);
        };
    }, []);

    return (
        <div
            id="IntroSection"
            className="h-auto px-3 w-full mx-auto grid grid-cols-7 items-center"
        >
            <div className="info col-span-5 w-full justify-self-start flex flex-col justify-around">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-serif cursor-pointer mb-3">
                    Hi, I'm <AnimateText text="Vikash" />
                </h1>
                <h3 className="text-base sm:text-xl mb-2 cursor-pointer">
                    <span className="border-r-2 border-gray-500 pr-2 mr-2">
                        <a href="https://github.com/vikashkumar3586" target='_blank' className='inline'>dev</a>
                    </span>
                    <a href="https://www.codechef.com/users/vikashkumar985" target='_blank' className='inline'>vikashkumar985</a>
                </h3>
                <div className="compo flex flex-nowrap items-center gap-2 text-sm cursor-default">
                    <div className={`location flex items-center gap-x-1 px-2 py-1 rounded bg-[var(--button-bg-${theme})]`}>
                        <MdLocationPin />
                        Bihar, India
                    </div>
                    <div className={`hidden sm:flex time items-center gap-x-1 px-2 py-1 rounded bg-[var(--button-bg-${theme})]`}>
                        <BsAlarm />
                        {time}
                    </div>
                    <a
                        href="/Vikash_resume.pdf"
                        download={true}
                        className={`flex items-center gap-x-1 px-2 py-1 rounded bg-[var(--button-bg-${theme})]`}
                    >
                        <span>✨</span>Resume
                    </a>
                </div>
            </div>

            {/* <div className="adminPic col-span-2 justify-self-end h-28 w-24 rounded-lg shadow-lg overflow-hidden group">
                <img
                    src={admin}
                    alt="AdminPic"
                    className="object-cover h-full w-full rounded-lg transition-transform duration-500 ease-in-out transform"
                />
            </div> */}
            <MagnifierImage src={admin} />
        </div>
    );


}

export default IntroSection;