"use client";
import React from "react";
import styles from "./projectstab.module.css";
import ProjectCard from "./ProjectCard/ProjectCard";
import { IProject } from "@/app/interfaces/IProject";

type Props = {
    projectsList: IProject[] | null;
    projectsListIsLoading: boolean;
};

const ProjectsTab = (props: Props) => {
    return (
        <div className={styles.container}>
            {props.projectsListIsLoading
                ? "Loading..."
                : props?.projectsList
                ? props.projectsList?.map((project, index) => (
                      <ProjectCard key={index} project={project} />
                  ))
                : ""}
        </div>
    );
};

export default ProjectsTab;
