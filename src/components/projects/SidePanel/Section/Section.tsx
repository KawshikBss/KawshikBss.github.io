"use client";

import React from "react";
import styles from "./section.module.css";
import { IProjectType } from "@/app/interfaces/IProject";
import { appendStyle, getIcon } from "@/lib/utils";

type Props = {
    projectType: IProjectType;
    active?: boolean;
    toggleActive?: () => void;
    handleActiveTypes: (projectType: IProjectType) => void;
};

const Section = (props: Props) => {
    return (
        <span
            className={appendStyle([
                styles.container,
                props.active ? styles.active : "",
            ])}
            onClick={() => props.handleActiveTypes(props.projectType)}
        >
            <span className={styles.checkbox}></span>
            {/* {props?.projectType?.icon && React.createElement(props.projectType.icon)} */}
            {props?.projectType?.icon
                ? React.createElement(getIcon(props?.projectType?.icon))
                : ""}
            <span className={styles.label}>{props?.projectType?.title}</span>
        </span>
    );
};

export default Section;
