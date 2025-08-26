import gsap from "gsap";
import { RxMoon } from "react-icons/rx";
import { Link } from "react-router-dom";
import { CiLight } from "react-icons/ci";
import { useEffect, useRef } from "react";
import { BiHomeAlt } from "react-icons/bi";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTheme } from "../services/ThemeProvider";

gsap.registerPlugin(ScrollTrigger);

function NavBar() {
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    // Remove typo: use "light" not "ligth"
    if (theme === "light") {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    } else {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    }
  }, [theme]);

  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const showAnim = gsap.from(navRef.current, {
      y: "-200%",
      paused: true,
      duration: 0.3,
    }).progress(1);

    ScrollTrigger.create({
      trigger: navRef.current,
      start: "0",
      end: "max",
      onUpdate: (self) => {
        // console.log(self.direction);
        self.direction === -1 ? showAnim.play() : showAnim.reverse();
      },
      markers: false
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill()); // Clean up
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed h-fit top-8 left-1/2 -translate-x-1/2 w-fit max-w-[90%] sm:max-w-[70%] lg:max-w-[42%] flex justify-between items-center py-2 px-4 md:px-6 rounded-full shadow-lg backdrop-blur border border-gray-500 gap-3 z-50"
    >
      {/* <Link to="/" className={`hover:text-[var(--text-hover-${theme})] p-2 hover:-translate-y-1 transition-all duration-200 text-lg`}>
        <BiHomeAlt />
      </Link> */}

      <Button path={"/"} theme={theme} children={<BiHomeAlt />} />
      <Button path={"/about"} theme={theme} children={"About"} />
      <Button path={"/project"} theme={theme} children={"Project"} />
      <Button path={"/connect"} theme={theme} children={"Reach"} />

      <div className="h-5 w-px bg-gray-500 mx-2"></div>

      <button
        onClick={() => { setTheme(theme == "dark" ? "light" : "dark") }}
        className={`border-0 rounded-full p-2 text-xl text-[var(--text-${theme})] hover:text-[var(--text-hover-${theme})] hover:bg-white/10 transition-colors duration-300 cursor-pointer`}>
        {(theme == "dark") ? <CiLight /> : <RxMoon />}
      </button>
    </nav>
  );
}

interface ButtonProps {
  path: string;
  theme: "dark" | "light";
  children: React.ReactNode;
}

function Button({path, theme, children}: ButtonProps) {
  return (
    <>
      <Link to={path} className={` ${theme == "dark" ? "hover:text-[var(--text-hover-dark)]" : "hover:text-[var(--text-hover-light)]"} hover:-translate-y-1 transition-all duration-200 text-lg`}>
        {children}
      </Link>
    </>
  )
}

export default NavBar;
