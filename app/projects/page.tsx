import clsx from "clsx";
import localFont from "next/font/local";
import React from "react";
import { ProjectsData } from "../lib/data";
import { ProjectInterface } from "../lib/defenitions";
import ProjectItem from "../ui/pages/projects/project-item";

const exoSpace = localFont({ src: "../../fonts/ExoSpace.ttf" });

function ProjectsShowcase() {
    return (
        <main className={clsx("min-h-screen", exoSpace.className)}>
            <h1 className="text-4xl font-black text-[#14e956] mt-10 md:mt-40 mx-auto md:ml-20 w-fit">
                {"{"}
                <span className="text-[#FFF] mx-2">Projects Showcase</span>
                {"}"}
            </h1>
            <div className="flex flex-col justify-between items-center mt-12 px-20 gap-24">
                {ProjectsData.map(
                    (project: ProjectInterface, index: number) => (
                        <ProjectItem
                            key={index}
                            project={project}
                            index={index}
                        />
                    )
                )}
            </div>
        </main>
    );
}

export default ProjectsShowcase;
