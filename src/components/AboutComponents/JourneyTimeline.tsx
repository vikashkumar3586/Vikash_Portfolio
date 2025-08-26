import React from 'react'
import Clg from '/assets/clg.png'
import Devs from '/assets/100xdevs.png'
import { HiOutlineAcademicCap } from "react-icons/hi";
import { LiaAwardSolid } from "react-icons/lia";

function JourneyTimeline() {
    return (
        <div id="JourneyTimeline" className="w-full mx-auto flex flex-col items-start justify-start gap-y-4">
            <header className='w-full flex flex-col items-start justify-start gap-y-2'>
                <h1 className="sm:text-xl font-bold">
                    <HiOutlineAcademicCap className='inline' /> Academic Background
                </h1>

                <section className='w-full grid grid-cols-7 grid-rows-1'>
                    <img src={Clg} alt="Clg" className='px-1 py-2 sm:p-4 sm:-translate-y-1 col-span-1 w-full rounded-full' />
                    <div className='col-span-4 flex flex-col justify-start items-start'>
                        <a href="https://acet.ac.in/" target="_blank" rel="noopener noreferrer" className="w-full group"><span className='hidden sm:inline'>Computer Science & Engineering</span><span className="opacity-0 group-hover:translate-1 group-hover:ml-2 group-hover:opacity-100 transition-all duration-300">{'>'}</span></a>
                        <h1 className='text-sm opacity-80'>Aditya College of Engineering and Technology</h1>
                        <h1 className='text-sm'>Bachelor of Technology <span className='scale-x-50'>—</span> B.Tech</h1>
                    </div>
                    <p className='col-span-2 batch text-end'>2022 - 2026</p>
                </section>
            </header>
            {/* certification */}

            <header className='w-full flex flex-col items-start justify-start gap-y-2'>
                <h1 className='certification sm:text-xl font-bold'>
                    <LiaAwardSolid className='inline' /> Certifications
                </h1>
                <p className='opacity-60'>I believe real skills beat paper. Still, grabbed some certs — did it my way, made it count.</p>
                <section className='w-full grid grid-cols-7 grid-rows-1'>
                    <img src={Devs} alt="Clg" className='object-cover p-2 sm:p-4 sm:-translate-y-3 col-span-1 w-full rounded-full' />
                    <div className='col-span-4 flex flex-col justify-start items-start'>
                        <a href="https://100xdevs.com/" target="_blank" rel="noopener noreferrer" className="text-sm sm:text-base w-full group">Full Stack With Mern <span className='hidden sm:inline'>Web -</span> Development<span className="opacity-0 group-hover:translate-1 group-hover:ml-2 group-hover:opacity-100 transition-all duration-300">{'>'}</span></a>
                        <h1 className='text-sm opacity-80'>Apna College</h1>
                        <h1 className='text-sm'>Credential ID: QV9YMGOT</h1>
                    </div>
                    <p className='batch col-span-2 text-end'><span className='hidden sm:inline'>Issued</span> Dec-2024</p>
                </section>
                <section className='w-full grid grid-cols-7 grid-rows-1 sm:-mt-4'> {/* Placeholder for more certifications (remove -mt-4) */}
                    <a href={"https://www.linkedin.com/in/vikash-pr/details/certifications/"} target='_blank' rel="noopener noreferrer"  className='col-span-7 animate-[blink_1.5s_linear_infinite]'>see more...</a>
                </section>
            </header>

        </div>
    )
}

export default JourneyTimeline