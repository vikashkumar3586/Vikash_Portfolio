import React from "react";
import { useTheme } from "../../services/ThemeProvider";
import LinkButton from "../LinkButton";

const ProjectOutro: React.FC = () => {
    const { theme } = useTheme();

    return (
        <div
            className={`text-center px-4 mb-20 transition-all duration-300 ${theme === "dark" ? "text-white" : "text-gray-800"
                }`}
        >
            <h2 className="text-xl md:text-2xl font-bold mb-2">
                The Journey Doesn’t End Here 🚀
            </h2>
            <p className="text-sm md:text-base mb-6 max-w-xl mx-auto">
                These projects were just a glimpse of my passion and skills.
                <br className="hidden sm:block" />
                Have something in mind? Let’s turn your ideas into reality together.
            </p>
            <LinkButton
                path="/connect"
                txt="Let's Connect and Collaborate "
                className={`bg-[var(--button-bg-${theme})] text-[var(--text-${theme})] hover:opacity-80 transition-all duration-300`}
            />
        </div>
    );
};

export default ProjectOutro;
