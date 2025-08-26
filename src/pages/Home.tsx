import IntroSection from '../components/IntroSection';
import AboutSection from '../components/AboutSection';
import MarqueeSkills from '../components/MarqueeSkills';
import InteractSection from '../components/InteractSection';
import ProjectSection from '../components/ProjectSection';
import ConnectSection from '../components/ConnectSection';

function Home() {
  return (
    <div id="home" className="mt-28 flex flex-col items-center justify-center gap-y-9 w-full mx-auto">
      <IntroSection />
      <AboutSection />
      <MarqueeSkills />
      <InteractSection />
      <ProjectSection />
      <ConnectSection />

    </div>
  )
}

export default Home;