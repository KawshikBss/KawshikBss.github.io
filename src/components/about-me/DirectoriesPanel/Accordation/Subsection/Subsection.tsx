"use client";
import { appendStyle } from "@/lib/utils";
import React, { useState } from "react";
import { MdArrowForwardIos, MdWork } from "react-icons/md";
import styles from "./subsection.module.css";
import { FaFolder, FaFolderOpen, FaUniversity } from "react-icons/fa";
import IDirectory, { IFile } from "@/app/interfaces/IDirectory";
import { useAppDispatch } from "@/redux/hooks";
import { addDirectory } from "@/redux/features/directory-slice";

type Props = {
    subsection: IDirectory;
};

const Subsection = (props: Props) => {
    const [extended, setExtended] = useState(false);
    const handleExtendSection = () => setExtended((prev) => !prev);
    const dispatch = useAppDispatch();
    const openDirectory = (targetDirectory: IFile) =>
        dispatch(addDirectory(targetDirectory));

    return (
        <li
            className={appendStyle([
                styles.container,
                extended ? styles.extended : "",
            ])}
        >
            <span className={styles.subsection} onClick={handleExtendSection}>
                <MdArrowForwardIos />
                <span className={styles.section_icon}>
                    {extended ? <FaFolderOpen /> : <FaFolder />}
                </span>
                {props?.subsection?.title}
            </span>
            <ul className={styles.subsection_list}>
                {props.subsection.files?.map((subsection, index) => (
                    <li
                        key={index}
                        className={styles.subsection_list_item}
                        onClick={() => openDirectory(subsection)}
                    >
                        {subsection.label.length > 10
                            ? subsection.label.slice(0, 7) + "..."
                            : subsection.label}
                    </li>
                ))}
            </ul>
        </li>
    );
};

export default Subsection;
