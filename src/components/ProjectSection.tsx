import React from 'react'
import { Link } from 'react-router-dom';
import flashDownload from '/assets/projects/pro_12.png';
import cyberFiction from '/assets/projects/pro_10.png';
import ProjectCard from './ProjectCard';

function ProjectSection() {
  const leftDesc: string = "A Cross-platform video downloader for YouTube, Instagram, Facebook, and Twitter with format customization (audio/video/quality).";
  const rightDesc: string = "Designed the Cyberfiction website as a portfolio centerpiece, featuring advanced Canvas, and Tailwind CSS with smooth GSAP animations.";
  return (
    <div id='ProjectSection' className='px-3 h-auto w-full mx-auto flex flex-col items-center justify-center gap-y-3'>
      <h1 className='text-3xl sm:text-5xl font-extrabold font-serif '>cool things i've crafted</h1>
      <q className='text-sm opacity-80 sm:text-xl text-start w-full'>The frontend tells the story, but the backend makes it real.</q>
      <p className='text-justify'>I’ve been crafting solid backends and sleek frontends that just work. Here’s a peek at some of my latest projects — check out more on the <Link to="/project" className="inline hover:underline text-blue-500">projects page!</Link></p>
      <div className='h-full w-full grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-4 mt-2 sm:mt-0'>
        <div className="leftProject h-full w-full ">
          <ProjectCard imgSrc={'pro_12'} title={'Flash Download'} description={leftDesc} timeStamp={'10 feb, 2025 - 28 march, 2025'} status={true} techStack={["React.js", "TailwindCSS", "Node.js", "Express.js"]} codeLink='https://github.com/Devkant01/Media-Downloader-FlashDownload' />
        </div>
        <div className="rightProject h-full w-full ">
          {/* <ProjectCard imgSrc={'pro_11'} title={'cyberfiction.io'} description={rightDesc} timeStamp={"Nov 1, 2024 - December 15, 2025"} status={false} techStack={["JavaScript", "TailwindCSS", "GSAP", "Canvas"]} liveLink='https://devkant01.github.io/cyberfiction/' codeLink='https://github.com/Devkant01/cyberfiction'/> */}
          <ProjectCard imgSrc={'pro_11'} title={'Todoify'} description={rightDesc} timeStamp={"Nov 1, 2024 - December 15, 2025"} status={true} techStack={["ejs", "Node.js", "Express.js", "MongoDB"]} liveLink='https://todoify-djff.onrender.com/' codeLink='https://github.com/Devkant01/Todoify'/>
        </div>
      </div>
    </div>
  )
}

export default ProjectSection