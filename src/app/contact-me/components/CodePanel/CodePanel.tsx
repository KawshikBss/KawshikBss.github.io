"use client";

import React from "react";
import styles from "./codepanel.module.css";
import { parseCode } from "@/lib/parseCode";
import { IContactItem } from "@/app/interfaces/IContact";
import SendMail from "../SendMail/SendMail";
import { IMail } from "@/app/interfaces/IMail";

type Props = {
    currentTab?: IContactItem;
    messageData?: IMail;
    handleMessageData?: (
        event:
            | React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLTextAreaElement>
    ) => void;
};

const CodePanel = (props: Props) => {
    return (
        <div className={styles.container}>
            {props.currentTab?.compopnent ? (
                <SendMail
                    messageData={props.messageData}
                    handleMessageData={props.handleMessageData}
                />
            ) : props.currentTab?.content ? (
                parseCode(props.currentTab.content).map((line, lineIndex) => (
                    <span key={lineIndex} className="code-line">
                        {line.map((code, index) =>
                            React.createElement(
                                code?.component,
                                { ...code.props, key: index },
                                code.children
                            )
                        )}
                    </span>
                ))
            ) : (
                ""
            )}
        </div>
    );
};

export default CodePanel;
