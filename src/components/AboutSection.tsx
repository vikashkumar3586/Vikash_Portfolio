import React from 'react'
import { Link } from 'react-router-dom';
import { useTheme } from '../services/ThemeProvider';
import LinkButton from './LinkButton';

function AboutSection() {
  const theme = useTheme();
  const abtMsg: string = "I’m Vikash — a dev who loves crafting real-world web apps, exploring new tech, and writing clean code that not only works but looks good too. I blend backend magic to make my frontend shine. Always vibin’ with code and creating things that matter."
  // const abtMsg: string = "I'm Vikash — a full-stack developer who loves turning ideas into smooth, interactive experiences. I craft fast, responsive web apps with clean code, scalable backends, and a problem-solving mindset that drives everything I build."
  return (
    <div id='AboutSection' className='px-3 h-auto min-h-[8rem] w-full mx-auto'>
      <p className="opacity-80 w-full h-auto text-justify mb-4">{abtMsg}</p>
      <p className="opacity-80 w-full h-auto text-justify mb-4 hidden sm:block">When I’m not coding, I’m binging epic series like Mirzapur, playing games, or vibing with some tunes. Catch me out here building and dreaming big!</p>
      <LinkButton path='about' txt='Curious to know more ' />
      {/* Explore my journey →, See more about me → */}
    </div>
  )
}

export default AboutSection