"use client";
import { appendStyle, getIcon } from "@/lib/utils";
import React, { useState } from "react";
import styles from "./subsection.module.css";
import { IContactItem } from "@/app/interfaces/IContact";

type Props = {
    item: IContactItem;
    handleTabs?: (tab: IContactItem, type: string) => void;
};

const Subsection = (props: Props) => {
    return (
        <li
            className={styles.container}
            onClick={(event) => {
                event.stopPropagation();
                if (props.handleTabs) props.handleTabs(props.item, "append");
            }}
        >
            <span className={styles.subsection}>
                <span className={styles.section_icon}>
                    {props.item.icon
                        ? React.createElement(props.item.icon)
                        : props?.item?.type
                        ? React.createElement(getIcon(props.item.type))
                        : ""}
                </span>
                {props?.item?.title}
            </span>
        </li>
    );
};

export default Subsection;
