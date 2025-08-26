import { useRef, useState } from "react";
import { useTheme } from "../services/ThemeProvider";

export default function ZoomImage({ src }: { src: string }) {
    const { theme } = useTheme();
    const containerRef = useRef<HTMLDivElement>(null);
    const [initialLoading, setInitialLoading] = useState(true);
    const [style, setStyle] = useState<React.CSSProperties>({});
    const [hovering, setHovering] = useState(false);
    const [hasHovered, setHasHovered] = useState(false);

    const handleMouseMove = (e: React.MouseEvent) => {
        const bounds = containerRef.current?.getBoundingClientRect();
        if (!bounds) return;
        const x = e.clientX - bounds.left;
        const y = e.clientY - bounds.top;
        const radius = Math.max(10, Math.min(bounds.width, bounds.height) - 55);

        setStyle({
            transform: "scale(1.8)",
            transformOrigin: `${x}px ${y}px`,
            WebkitMaskImage: `radial-gradient(${radius}px at ${x}px ${y}px, black 98%, transparent 100%)`,
            maskImage: `radial-gradient(${radius}px at ${x}px ${y}px, black 98%, transparent 100%)`,
            pointerEvents: "none",
        });

        setHovering(true);
        if (!hasHovered) setHasHovered(true);
    };

    const handleMouseLeave = () => {
        setHovering(false);
        setStyle({});
    };

    const opacityClass = hovering
        ? "opacity-100"
        : "opacity-0";

    const delayClass = !hovering && hasHovered
        ? "" // skip delay on leave
        : !hasHovered
            ? "delay-300"
            : "";

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="cursor-pointer col-span-2 justify-self-end h-28 w-24 relative overflow-hidden rounded-lg"
        >
            {initialLoading &&
                <div className='w-full h-20 flex items-center justify-end'>
                    <div className={`loader-${theme}`}></div>
                </div>
            }

            <img
                src={src}
                alt="Static"
                onLoad={() => setInitialLoading(false)}
                onError={() => setInitialLoading(false)}
                className="h-full w-full object-cover z-10 relative"
            />


            <img
                src={src}
                alt="Zoomed"
                className={`absolute inset-0 h-full w-full object-cover z-20 transition-opacity duration-200 ${opacityClass} ${delayClass} sm:block hidden`}
                style={hovering ? style : {}}
            />

        </div>
    );
}
