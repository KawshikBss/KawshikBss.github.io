"use client";

import React, { useState, useEffect } from "react";
import styles from "./projects.module.css";
import SidePanel from "./components/SidePanel/SidePanel";
import Explorer from "./components/Explorer/Explorer";
import { IProjectType } from "../interfaces/IProject";
import ProjectsTab from "./components/ProjectsTab/ProjectsTab";
import useSWR from "swr";
import { url } from "inspector";

const fetcher = (url: string, body: string[]) =>
    fetch(url, {
        method: "POST",
        body: JSON.stringify({
            technologies: body,
        }),
        headers: { "content-type": "application/json" },
    }).then((res) => res.json());
type Props = {};

const Projects = (props: Props) => {
    const [activeTypes, setActiveTypes] = useState<IProjectType[]>([]);
    const handleActiveTypes = (projectType: IProjectType) => {
        setActiveTypes((prev: IProjectType[]) => {
            return prev.includes(projectType)
                ? prev.filter((item) => item !== projectType)
                : [...prev, projectType];
        });
    };
    const resetTypes = () => setActiveTypes([]);
    const {
        data: projectsList,
        error,
        isLoading: projectsListIsLoading,
    } = useSWR(
        [
            `${process.env.NEXT_PUBLIC_API_BASE}/projects/kawshikbss@gmail.com`,
            activeTypes.map((item) => item._id),
        ],
        ([url, body]) => fetcher(url, body)
    );
    return (
        <>
            <SidePanel
                activeTypes={activeTypes}
                handleActiveTypes={handleActiveTypes}
            />
            <Explorer activeTypes={activeTypes} resetTypes={resetTypes} />
            <ProjectsTab
                projectsList={projectsList?.data}
                projectsListIsLoading={projectsListIsLoading}
            />
        </>
    );
};

export default Projects;
