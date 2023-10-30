import React from "react";
import styles from "./send-mail.module.css";
import { IMail } from "@/app/interfaces/IMail";

type Props = {
  messageData?: IMail;
  handleMessageData?: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
};

const SendMail = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.input_group}>
        <span className={styles.input_label}>_name:</span>
        <input
          className={styles.input_field}
          type="text"
          name="name"
          value={props.messageData?.name}
          placeholder="What should I call you?"
          onChange={props.handleMessageData}
        />
      </div>
      <div className={styles.input_group}>
        <span className={styles.input_label}>_email:</span>
        <input
          className={styles.input_field}
          type="text"
          name="email"
          value={props.messageData?.email}
          placeholder="Where can I send a reply?"
          onChange={props.handleMessageData}
        />
      </div>
      <div className={styles.input_group}>
        <span className={styles.input_label}>_message:</span>
        <textarea
          className={styles.input_field}
          name="message"
          value={props.messageData?.message}
          placeholder="What is it that you want to say to me?"
          onChange={props.handleMessageData}
        />
      </div>
      <span className={styles.submit_btn}>submit-message</span>
    </div>
  );
};

export default SendMail;
