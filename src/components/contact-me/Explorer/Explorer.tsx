import React from "react";
import styles from "./explorer.module.css";
import { AiOutlineClose } from "react-icons/ai";
import { appendStyle } from "@/lib/utils";
import { IContactItem } from "@/app/interfaces/IContact";

type Props = {
    currentTab?: IContactItem | null;
    setCurrentTab?: (tab: IContactItem | null) => void;
    openedTabs?: IContactItem[];
    handleTabs?: (tab: IContactItem, type: string) => void;
};

const Explorer = (props: Props) => {
    const setCurrentTab = (tab: IContactItem | null) => {
        if (props?.setCurrentTab) {
            props.setCurrentTab(tab);
        }
    };
    const closetab = (tab: IContactItem) => {
        if (props?.handleTabs) {
            props.handleTabs(tab, "remove");
        }
    };
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
            {props?.openedTabs?.map((tab, index) => (
                <span
                    key={index}
                    className={appendStyle([
                        styles.explorer_tab,
                        props?.currentTab?.title === tab?.title
                            ? styles.active
                            : "",
                    ])}
                    onClick={() => setCurrentTab(tab)}
                >
                    {tab?.title}
                    <span
                        onClick={(event) => {
                            event.stopPropagation();
                            closetab(tab);
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
