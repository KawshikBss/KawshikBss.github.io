"use client";

import React, { useState } from "react";
import styles from "./accordation.module.css";
import { appendStyle } from "@/lib/utils";
import { BiSolidRightArrow } from "react-icons/bi";
import Subsection from "./Subsection/Subsection";
import IDirectory from "@/app/about-me/interfaces/IDirectory";

type Props = {
    section: IDirectory;
};

const Accordation = (props: Props) => {
    const [extended, setExtended] = useState(false);
    const handleExtendSection = () => setExtended((prev) => !prev);
    console.log(extended);

    return (
        <div
            className={appendStyle([
                styles.container,
                extended ? styles.extended : "",
            ])}
        >
            <span onClick={handleExtendSection} className={styles.section}>
                <BiSolidRightArrow />
                {props.section.title}
            </span>
            {
                <ul className={styles.subsection_list}>
                    {props?.section?.sections &&
                        props.section.sections.map((subsection, index) => (
                            <Subsection key={index} subsection={subsection} />
                        ))}
                </ul>
            }
        </div>
    );
};

export default Accordation;
