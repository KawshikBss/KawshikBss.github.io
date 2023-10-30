import { IContactItem } from "@/app/interfaces/IContact";
import React from "react";
import styles from "./cli-panel.module.css";
import MailCode from "../SendMail/MailCode/MailCode";
import { IMail } from "@/app/interfaces/IMail";

type Props = {
  activeTab?: IContactItem | undefined;
  messageData?: IMail;
};

const CliPanel = (props: Props) => {
  return (
    <div className={styles.container}>
      {props?.activeTab?.compopnent && (
        <MailCode mailData={props.messageData} />
      )}
    </div>
  );
};

export default CliPanel;
