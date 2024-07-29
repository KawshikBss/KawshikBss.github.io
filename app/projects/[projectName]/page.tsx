import { SeperateProjects } from "@/app/lib/data";
import Image from "next/image";
import React from "react";
import ViewBtn from "@/app/ui/pages/projects/view-btn";

type Props = {
    params: { projectName: string };
};

function SingleProject({ params: { projectName } }: Props) {
    const project = SeperateProjects.find((item) => item.slug === projectName);
    return (
        <div className="w-full flex flex-col justify-between items-center xl:flex-row my-10">
            <div className="w-full xl:w-3/5" style={{ perspective: "800px" }}>
                <Image
                    src={project?.thumbnail ?? ""}
                    width={700}
                    height={400}
                    alt={project?.name ?? ""}
                    className="max-w-[350px] md:max-w-[500px] xl:max-w-[700px] max-h-[200px] md:max-h-[300px] xl:max-h-[400px] mx-auto mb-5 xl:mb-0 rounded-2xl filter shadow-2xl shadow-white project-item-left"
                />
            </div>
            <div className="w-full xl:w-2/5 flex flex-col items-center">
                <h2 className="text-[#14e956] hover:text-[#12141d] uppercase text-3xl font-black mb-12 border-[#14e956] hover:bg-[#14e956] border-4 py-2 px-4 shadow-bottomRight hover:shadow-none transition-all duration-500 ease-in-out">
                    {project?.name}
                </h2>
                <p className="text-lg text-center">
                    <span className="text-[#14e956]">Description: </span>
                    {project?.description}
                </p>
                <span className="text-[#14e956] my-2 xl:my-4">
                    Tech-Stack:{" "}
                </span>
                <div className="w-full flex flex-row justify-center items-center flex-wrap gap-4">
                    {project?.techs.map((tech: string, index: number) => (
                        <span
                            key={index}
                            className="bg-[#1e2128] py-1 px-2 rounded-2xl text-[#fffff4] font-bold lowercase"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
                <ViewBtn
                    link={project?.link}
                    mobileApp={project?.mobileApp ?? false}
                />
            </div>
        </div>
    );
}

export async function getStaticPaths() {
    const paths = SeperateProjects.map((project) => ({
        params: { projectName: project.slug },
    }));

    return {
        paths,
        fallback: false,
    };
}

export default SingleProject;
