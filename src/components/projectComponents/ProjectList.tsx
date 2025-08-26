import { useEffect, useState, useMemo } from "react";
import ProjectCard from "../ProjectCard";
import { FaAngleDoubleDown, FaAngleDoubleUp } from "react-icons/fa";
import { useTheme } from "../../services/ThemeProvider";

interface userFilter {
    title: string,
    tech: string[],
    year: number[]
}

interface projectData {
    id: number,
    title: string,
    description: string,
    image?: string,
    code: string,
    live?: string,
    status: boolean,
    tech: string[],
    year: number,
}

function ProjectList({ title, tech, year }: userFilter) {
    const url = `${import.meta.env.VITE_BACKEND_URL}/dev/projects`;
    const [data, setData] = useState<projectData[]>([]);
    const [count, setCount] = useState<number>(4);
    const { theme } = useTheme();

    const fetchData = async () => {
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok)
                throw new Error("Something issue with frontend call");
            const result = await response.json();
            setData(result);
        } catch {
            setData([]);
        }
    };

    useEffect(() => {
        fetchData();
        setCount(4); // reset count when filter changes
    }, [title, tech, year]);

    const filteredData = useMemo(() => {
        return data.filter(pro => {
            const titleMatch = title ? pro.title.toLowerCase().includes(title.toLowerCase()) : true;
            const techMatch = tech.length > 0 ? tech.every(t => pro.tech.includes(t)) : true;
            const yearMatch = year.length > 0 ? year.includes(pro.year) : true;
            return titleMatch && techMatch && yearMatch;
        });
    }, [data, title, tech, year]);

    const displayedData = filteredData.slice(0, count);
    return (
        <>
            <div className='h-full w-full grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-4 mt-2 sm:mt-0'>
                {displayedData.length > 0
                    ? displayedData.map((pro, index) => (
                        <div key={index} className="h-full w-full">
                            <ProjectCard
                                imgSrc={pro.image}
                                title={pro.title}
                                description={pro.description}
                                timeStamp={String(pro.year)}
                                status={pro.status}
                                techStack={pro.tech}
                                codeLink={pro.code}
                                liveLink={pro.live}
                            />
                        </div>
                    ))
                    : <div className='col-span-1 sm:col-span-2 h-full flex items-center justify-center my-4'>
                        <div className={`loader-${theme}`}></div>
                    </div>
                }
            </div>

            <div className="w-full relative flex justify-between items-center mb-4">
                {filteredData.length > count && (
                    <button
                        onClick={() => setCount(prev => prev + 2)}
                        className={`flex items-center gap-2 py-2 px-4 rounded-lg bg-[var(--button-bg-${theme})] group cursor-pointer`}>
                        Load More
                        <FaAngleDoubleDown className='inline group-hover:translate-y-1 transition-all duration-500' />
                    </button>
                )}

                {count > 4 && (
                    <button
                        onClick={() => setCount(4)}
                        className={`flex items-center gap-2 py-2 px-4 rounded-lg bg-[var(--button-bg-${theme})] group cursor-pointer`}>
                        <FaAngleDoubleUp className='inline group-hover:-translate-y-1 transition-all duration-500' />
                        Show Less
                    </button>
                )}
            </div>
        </>
    );
}

export default ProjectList;
