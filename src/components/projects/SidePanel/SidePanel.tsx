"use client";

import React, { useState, useEffect } from "react";
import styles from "./sidepanel.module.css";
import { BiSolidDownArrow } from "react-icons/bi";
// import Section from "./Section/Section";
import { IProjectType } from "@/app/interfaces/IProject";
import useSWR from "swr";
import Section from "./Section/Section";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

type Props = {
    activeTypes: IProjectType[];
    handleActiveTypes: (projectType: IProjectType) => void;
};

const SidePanel = (props: Props) => {
    const [skillsList, setSkillsList] = useState<IProjectType[]>([]);
    const { data, error } = useSWR(
        `${process.env.NEXT_PUBLIC_API_BASE}/skills`,
        fetcher
    );
    useEffect(() => {
        if (data?.data) {
            setSkillsList(data.data);
        }
    }, [data]);
    return (
        <div className={styles.container}>
            <span className={styles.section}>
                <BiSolidDownArrow />
                projects
            </span>
            {skillsList?.length
                ? skillsList.map((projectType, index) => (
                      <Section
                          key={index}
                          active={
                              props.activeTypes.includes(projectType)
                                  ? true
                                  : false
                          }
                          projectType={projectType}
                          handleActiveTypes={props.handleActiveTypes}
                      />
                  ))
                : ""}
        </div>
    );
};

export default SidePanel;
