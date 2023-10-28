import React from "react";
import styles from "./explorer.module.css";
import { AiOutlineClose } from "react-icons/ai";
import { appendStyle } from "@/lib/utils";
import { IProjectType } from "@/app/interfaces/IProject";

type Props = {
    activeTypes?: IProjectType[];
    resetTypes?: () => void;
};

const Explorer = (props: Props) => {
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

            {props.activeTypes?.length ? (
                <span className={styles.explorer_tab}>
                    {props.activeTypes?.map((item) => item.title + "; ")}
                    <span onClick={props.resetTypes}>
                        <AiOutlineClose />
                    </span>
                </span>
            ) : (
                ""
            )}
        </div>
    );
};

export default Explorer;
