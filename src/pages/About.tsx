import AboutIntro from "../components/AboutComponents/AboutIntro"
import JourneyTimeline from "../components/AboutComponents/JourneyTimeline"
import TechStack from "../components/AboutComponents/TechStack"
import CurrentFocus from "../components/AboutComponents/CurrentFocus"
import BeyondCode from "../components/AboutComponents/BeyondCode"

function About() {
  return (
    <div
      className="mt-28 px-3 flex flex-col items-center justify-center gap-y-6 w-full mx-auto">
      <AboutIntro />
      <JourneyTimeline />
      <TechStack />
      <CurrentFocus />
      <BeyondCode />
    </div>
  )
}

export default About