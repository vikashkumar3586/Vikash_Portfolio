import React from 'react'
import { Link } from 'react-router-dom';
import { IoLinkSharp } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { useTheme } from '../services/ThemeProvider';

function ConnectSection() {
    const { theme } = useTheme();
    const [show, setShow] = React.useState(false);
    const [visibleCount, setVisibleCount] = React.useState(0);
    const mySocials = [
        {
            icon: <MdOutlineEmail className='inline' />,
            link: 'mailto:vikashkumar35867@gmail.com'
        },
        {
            icon: <FaLinkedinIn className='inline' />,
            link: 'https://www.linkedin.com/in/vikash-pr/'
        },
        {
            icon: <FiGithub className='inline' />,
            link: 'https://github.com/vikashkumar3586'
        }
    ]

    React.useEffect(() => {
        let timer: ReturnType<typeof setTimeout>;

        if (show && visibleCount < mySocials.length) {
            timer = setTimeout(() => {
                setVisibleCount(visibleCount + 1);
            }, 200);
        }

        if (!show) {
            setVisibleCount(0);
        }

        return () => clearTimeout(timer);
    }, [show, visibleCount, mySocials.length]);

    return (
        <div className="flex flex-col items-center text-center gap-4 px-2">
            <Link to="/connect" className={`text-sm font-serif rounded-lg ${theme == "dark" ? "text-black bg-[var(--button-bg-light)]" : "text-white bg-[var(--button-bg-dark)]"} border border-black px-4 py-2`}>
                Reach me out {theme == 'dark' ? "💌" : "💛"}
            </Link>
            {/* <LinkButton path={"/connect"} txt={"Reach me out 💌💛"} icon={false} /> */}
            <p className="text-justify">
                💡Got an idea? Hiring? Or just vibin’ with tech? I build stuff that people actually use — clean interfaces, smooth flows, and logic that doesn’t break under pressure. Not just shipping fast — shipping with thought. If that sounds like someone you’d want to work with, hit me up on <a href="https://www.linkedin.com/in/vikash-pr/" className='inline font-bold'>linkedIn</a>  — let’s make moves!!
            </p>
            <div className='mt-4 w-full my-20 flex gap-4 items-start'>
                <button onClick={() => setShow(!show)} className='cursor-pointer group'>
                    <IoLinkSharp className='mr-2 sm:mr-0 inline group-hover:text-lg group-hover:opacity-80 transition-all duration-200' />
                    <p className='inline group-hover:scale-x-125 group-hover:opacity-80 transition-all duration-200'>My Socials</p>
                </button>
                {show &&
                    mySocials.slice(0, visibleCount).map((social, index) => (
                        <a
                            key={index}
                            href={social.link}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='transition-opacity duration-500 animate-slide-in'
                        >
                            {social.icon}
                        </a>
                    ))}
            </div >

        </div >

    )
}

export default ConnectSection