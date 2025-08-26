// src/pages/Connect.tsx
import { useState } from "react";
import { MdConnectWithoutContact } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineContentCopy } from "react-icons/md";
import { useTheme } from "../../services/ThemeProvider";

export default function Connecting() {
    const linkToChat = `https://wa.me/9852719329`;
    const startingChat = `?text=Hi%20there!%20I%20loved%20your%20work%20and%20want%20to%20connect.`;
    const myMail = `vikashkyp0028@gmail.com`;
    const [text, setText] = useState("Email");
    const { theme } = useTheme();


    return (
        <>
            <header className='w-full flex flex-col items-start gap-y-3'>
                <h1 className='sm:text-xl font-bold'>
                    <MdConnectWithoutContact className='inline' /> Contact
                </h1>
                <p className='text-justify leading-tight sm:leading-normal'>
                    I'm always looking to collaborate on interesting projects with great people. Need a supportive hand? I have two!
                </p>
                <div className="flex">
                    <a href={`${linkToChat}${startingChat}`} target="_blank" rel="noopener noreferrer" className={`py-2 px-4 rounded-lg bg-[var(--button-bg-${theme})] group flex items-center justify-between`}>
                        Start a Chat <FaWhatsapp className="ml-1"/>
                    </a>
                    <button
                        type="button"
                        onClick={() => {
                            navigator.clipboard.writeText(myMail)
                            setText("Copied");
                            setTimeout(() => {
                                setText("Email");
                            }, 1000);
                        }
                        }
                        className={`cursor-pointer ml-3 py-2 px-4 rounded-lg bg-[var(--button-bg-${theme})] flex items-center transition-colors hover:bg-[var(--button-bg-hover-${theme})]`}
                    >
                        <MdOutlineContentCopy className="mr-1"/> {text}
                    </button>
                </div>
            </header>
        </>
    )
}
