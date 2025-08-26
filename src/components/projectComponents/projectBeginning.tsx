// src/components/ProjectBeginning.tsx
import React, { useRef, useEffect, useState } from 'react';
import { GrProjects } from "react-icons/gr";
import { GoPlusCircle } from "react-icons/go";
import { useTheme } from '../../services/ThemeProvider';
import DropDownCheckBox from './DropDownCheckBox';
import ProjectList from './ProjectList';

const Technologies = [
    "React.js", "Node.js", "TypeScript", "JavaScript", "Express.js", "TailwindCSS", "MongoDB", "PostgreSQL"
];
const Years = [2025, 2024, 2023];

interface Data {
    title: string,
    tech: string[],
    year: number[]
}

function ProjectBeginning() {
    const { theme } = useTheme();
    const techRef = useRef<HTMLDivElement>(null);
    const yearRef = useRef<HTMLDivElement>(null);
    
    const [showTech, setShowTech] = useState(false);
    const [showYear, setShowYear] = useState(false);
    const [dropdownPosition, setDDP] = useState<'top' | 'bottom'>('bottom');
    const [data, setData] = useState<Data>({ title: "", tech: [], year: [] });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.stopPropagation();
        const { name, value, checked } = e.target;
        setData(prev => {
            if (name === 'tech') {
                const updated = checked
                    ? [...prev.tech, value]
                    : prev.tech.filter(t => t !== value);
                return { ...prev, tech: updated };
            }
            if (name === 'year') {
                const val = parseInt(value);
                const updated = checked
                    ? [...prev.year, val]
                    : prev.year.filter(y => y !== val);
                return { ...prev, year: updated };
            }
            return { ...prev, [name]: value };
        });
    };

    useEffect(() => {
        const outsideClick = (e: MouseEvent) => {
            if (
                techRef.current && !techRef.current.contains(e.target as Node) &&
                yearRef.current && !yearRef.current.contains(e.target as Node)
            ) {
                setShowTech(false);
                setShowYear(false);
            }
        };
        document.addEventListener('mousedown', outsideClick);
        return () => document.removeEventListener('mousedown', outsideClick);
    }, []);

    useEffect(() => {
        if (techRef.current) {
            const space = techRef.current.getBoundingClientRect().top;
            setDDP(space > 250 ? 'bottom' : 'top');
        }
    }, [showTech, showYear]);

    // console.log(data);

    return (
        <header className='w-full flex flex-col items-start gap-y-3'>
            <h1 className='certification sm:text-xl font-bold'>
                <GrProjects className='inline' /> My Projects
            </h1>
            <p className='text-justify leading-tight sm:leading-normal'>
                This Isn’t Just a Showcase — It’s a Timeline of Lessons Learned, Technologies Mastered, and Challenges Conquered.
            </p>
            <form className='w-full grid grid-cols-8 gap-3 mt-2'>
                <input
                    name='title'
                    value={data.title}
                    onChange={handleChange}
                    placeholder='search project...'
                    className="col-span-4 sm:col-span-5 border placeholder-gray-400 border-neutral-700 py-2 rounded-lg indent-3 outline-none"
                />
                <DropDownCheckBox
                    label={
                        <>
                            <span className="hidden sm:inline">Technology</span>
                            <span className="inline sm:hidden">Tech</span>
                        </>
                    }
                    items={Technologies}
                    name='tech'
                    selected={data.tech}
                    onChange={handleChange}
                    show={showTech}
                    setShow={setShowTech}
                    setShowOther={setShowYear}
                    refEl={techRef}
                    position={dropdownPosition}
                    theme={theme}
                    leftAlign
                />
                <DropDownCheckBox
                    label={<span>Year</span>}
                    items={Years}
                    name='year'
                    selected={data.year}
                    onChange={handleChange}
                    show={showYear}
                    setShow={setShowYear}
                    setShowOther={setShowTech}
                    refEl={yearRef}
                    position={dropdownPosition}
                    theme={theme}
                    rightAlign
                />
            </form>

            {/* Project section */}
            <ProjectList {...data} />
        </header>
    );
}

export default ProjectBeginning;
