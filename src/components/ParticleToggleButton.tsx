import { useTheme } from "../services/ThemeProvider";
import { FaCaretRight } from "react-icons/fa6";
import { PiSlideshowFill, PiSlideshowLight } from "react-icons/pi";


interface Props {
    showParticles: boolean;
    setShowParticles: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ParticleToggleButton({ showParticles, setShowParticles }: Props) {
    const { theme } = useTheme();

    return (
        <div className="fixed bottom-5 right-5 z-50">
            {/* Button */}
            <div
                onClick={() => setShowParticles(!showParticles)}
                className="hidden sm:block relative cursor-pointer text-2xl transition-all duration-200 p-3 group"
            >
                {showParticles ? <PiSlideshowFill /> : <PiSlideshowLight />}

                {/* Tooltip */}
                <div
                    className={`
                        absolute right-full mr-3 top-1/2 -translate-y-1/2
                        px-4 py-1 rounded-sm text-sm font-medium bg-[var(--button-bg-${theme})]
                        shadow-lg
                        transition-all duration-300 ease-in-out
                        transform
                        group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-100
                        opacity-0 -translate-x-2 scale-95
                    `}
                >
                    <span className="whitespace-nowrap">
                        {showParticles ? "Hide Background" : "Show Background"}
                    </span>
                    <FaCaretRight className={`
                        absolute right-[-11px] top-1/2 -translate-y-1/2
                        ${theme === "dark"
                            ? "text-[var(--button-bg-dark)]"
                            : "text-[var(--button-bg-light)]"} text-xl`}
                    />
                </div>
            </div>
        </div>
    );
}


