import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { ISourceOptions } from "@tsparticles/engine";
import type { Engine } from "@tsparticles/engine";
import { loadFull } from "tsparticles";
import particlesOptions from "../config/particles.json";
import { useTheme } from "./ThemeProvider";
import { useEffect, useState } from "react";

function OgBackground() {
    const [init, setInit] = useState(false);
    const { theme } = useTheme();
    particlesOptions.particles.color.value = theme === 'dark' ? '#ffffff' : '#000000';


    useEffect(() => {
        initParticlesEngine(async (engine: Engine) => {
            await loadFull(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    return (
        <>
            { init && (<Particles options={ particlesOptions as ISourceOptions } />)}
        </>
    )
}

export default OgBackground;