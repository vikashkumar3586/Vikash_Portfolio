import React from 'react';
import LinkButton from '../LinkButton';

function AboutIntro() {
    const name: string = "Vikash Kumar";
    return (
        <div id="AboutIntro" className="w-full mx-auto">
            <div className="heading">
                <h1
                    className='h-auto w-full text-start text-[28px]  sm:text-4xl font-extrabold font-serif sm:mb-3 group'>
                    Hey, I'm {name.split("").map((item, idx) => {
                        return <span key={idx}
                            className='inline cursor-default'>{item}
                        </span>
                    })
                    }
                </h1>
                <h1
                    className='w-full text-start text-3xl sm:text-4xl md:text-5xl font-extrabold font-serif mb-3'>
                    A Full-Stack <span className='opacity-80'>Developer.</span>
                </h1>
            </div>
            <section className="w-full mx-auto mb-6">
                <h2 className=" sm:text-xl font-bold">About Me</h2>

                <div className="text-base leading-normal text-justify font-sans opacity-80">
                    &nbsp; A passionate developer who loves building web applications that solve real problems — not just demos. Regularly dives into DSA to sharpen problem-solving skills and logic. Takes pride in writing <span className="font-medium text-primary">clean, maintainable code</span>, often using backend technologies creatively to enhance the frontend experience. Always evolving — balancing development and DSA with purpose and curiosity.
                    <p>Always building, always learning — that’s the vibe.</p>
                </div>
            </section>
            <LinkButton path={"/connect"} txt={"Get in touch 📬"} />
        </div>
    )
}

export default AboutIntro;