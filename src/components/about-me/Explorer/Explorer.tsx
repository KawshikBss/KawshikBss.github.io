"use client";

import React from "react";
import styles from "./explorer.module.css";
import { AiOutlineClose } from "react-icons/ai";
import { appendStyle } from "@/lib/utils";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
    addDirectory,
    removeDirectory,
} from "@/redux/features/directory-slice";
import { IFile } from "@/app/interfaces/IDirectory";

type Props = {};

const Explorer = (props: Props) => {
    const directoriesList = useAppSelector(
        (state) => state.directoriesReducer.directoriesList
    );
    const activeDirectory = useAppSelector(
        (state) => state.directoriesReducer.activeDirectory
    );
    const dispatch = useAppDispatch();
    const closeDirectory = (targetDirectory: IFile) =>
        dispatch(removeDirectory(targetDirectory));
    const setActiveDirectory = (targetDirectory: IFile) =>
        dispatch(addDirectory(targetDirectory));
    return (
        <div className={styles.container}>
            <span
                style={{
                    width: 0,
                    overflow: "hidden",
                    paddingLeft: 0,
                    paddingRight: 0,
                    border: "none",
                }}
                className={styles.explorer_tab}
            >
                0
            </span>
            {directoriesList?.map((directory: IFile, index: number) => (
                <span
                    key={index}
                    className={appendStyle([
                        styles.explorer_tab,
                        activeDirectory?.title === directory?.title
                            ? styles.active
                            : "",
                    ])}
                    onClick={() => setActiveDirectory(directory)}
                >
                    {directory?.title}
                    <span
                        onClick={(event) => {
                            event.stopPropagation();
                            closeDirectory(directory);
                        }}
                    >
                        <AiOutlineClose />
                    </span>
                </span>
            ))}
        </div>
    );
};

export default Explorer;
