"use client";

import React, { useState } from "react";
import DirectoriesPanel from "../../components/contact-me/DirectoriesPanel/DirectoriesPanel";
import Explorer from "../../components/contact-me/Explorer/Explorer";
import CodePanel from "../../components/contact-me/CodePanel/CodePanel";
import { IContactItem } from "../interfaces/IContact";
import CliPanel from "../../components/contact-me/CliPanel/CliPanel";
import { IMail } from "../interfaces/IMail";

type Props = {};

const ContactMe = (props: Props) => {
    const [tabsQueue, setTabsQueue] = useState<IContactItem[]>([]);
    const [currentTab, setCurrentTab] = useState<IContactItem | undefined>(
        undefined
    );
    const handleTabs = (tab: IContactItem, type = "append") => {
        setTabsQueue((prev) => {
            switch (type) {
                case "append":
                    setCurrentTab(tab);
                    if (prev.includes(tab)) return prev;
                    return [...prev, tab];
                case "remove":
                    const tmp = prev.filter((value) => value !== tab);
                    setCurrentTab((curr) => {
                        return curr
                            ? tmp.includes(curr)
                                ? curr
                                : tmp.length
                                ? tmp[0]
                                : undefined
                            : undefined;
                    });
                    return tmp;
                default:
                    return prev;
            }
        });
    };

    const [messageData, setMessageData] = useState<IMail>({
        name: "",
        email: "",
        message: "",
    });

    const handleMessageData = (
        event:
            | React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        const { name, value } = event.target;
        setMessageData((prev) => {
            return { ...prev, [name]: value };
        });
    };

    return (
        <>
            <DirectoriesPanel handleTabs={handleTabs} />
            <Explorer
                currentTab={currentTab}
                setCurrentTab={setCurrentTab}
                openedTabs={tabsQueue}
                handleTabs={handleTabs}
            />
            <CodePanel
                currentTab={currentTab}
                messageData={messageData}
                handleMessageData={handleMessageData}
            />
            <CliPanel messageData={messageData} activeTab={currentTab} />
        </>
    );
};

export default ContactMe;
