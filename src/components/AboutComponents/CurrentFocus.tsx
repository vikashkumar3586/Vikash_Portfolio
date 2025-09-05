import React from 'react';
import { FaGithub, FaFolderOpen, FaArrowRight } from 'react-icons/fa';
import { LuConstruction } from "react-icons/lu";
import LinkButton from '../LinkButton'
import { useTheme } from '../../services/ThemeProvider'; // Replace with actual path

const CurrentFocused = () => {
    const { theme } = useTheme();

    const projectName = "vikash_Portfolio";
    const projectDescription = "A clean, fast, and minimal dev portfolio + blog platform";
    const techStack = "Pure MERN Stack + tailwindcss & GSAP for styling and animations";
    const repoUrl = "https://github.com/vikashkumar3586/Vikash_Portfolio";

    return (
        <div className={`w-full flex flex-col items-start justify-start gap-y-2`}>
            <h2 className={`sm:text-xl font-bold`}>
            <LuConstruction className='inline'/> Currently Building
            </h2>

            <p className={`text-sm leading-relaxed text-justify`}>
                Just saw my tech stack? Cool — here’s where all that comes to life.
                I’m currently working on a project called <span className="italic ">“{projectName}”</span> — {projectDescription}.
                Built with <span className="font-medium">{techStack}</span>, it’s my go-to space to test ideas and ship quickly.
            </p>

            <p className={`text-base leading-relaxed`}>
                Still a work in progress (aren’t we all?), but it’s shaping up nicely.
            </p>

            <div className="">
                <a
                    href={repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 font-medium text-blue-500 hover:scale-x-105 transition-all duration-150`}
                >
                    <FaGithub /> Check out the GitHub repo
                </a>
            </div>

            {/* New block inviting user to explore all projects */}
            <LinkButton path='/project' txt='Curious to see more? ' /> 
            {/* Explore all my projects */}
        </div>
    );
};

export default CurrentFocused;
