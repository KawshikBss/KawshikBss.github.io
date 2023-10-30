import { IMail } from "@/app/interfaces/IMail";
import React from "react";
import styles from "./mail-code.module.css";

type Props = {
  mailData?: IMail;
};

const MailCode = (props: Props) => {
  return (
    <div className={styles.container}>
      <span className="code-line">
        <span className="code code-line-index">1</span>
        <span className="code code-const">const</span>
        <span className="code code-var">SendMail</span>
        <span className="code code-white">=</span>
        <span className="code code-paren">{"("}</span>
        <span className="code code-attr">_name</span>
        <span className="code code-white">{","}</span>
        <span className="code code-attr">_email</span>
        <span className="code code-white">{","}</span>
        <span className="code code-attr">_message</span>
        <span className="code code-paren">{")"}</span>
        <span className="code code-hook">{"=>"}</span>
        <span className="code code-curly">{"{"}</span>
      </span>
      <span className="code-line">
        <span className="code code-line-index">2</span>
        <span className="code code-tab" />
        <span className="code code-const">const</span>
        <span className="code code-var">_name</span>
        <span className="code code-white">=</span>
        <span className="code code-quotes">"{props.mailData?.name}"</span>
        <span className="code code-white">{";"}</span>
      </span>
      <span className="code-line">
        <span className="code code-line-index">3</span>
        <span className="code code-tab" />
        <span className="code code-const">const</span>
        <span className="code code-var">_email</span>
        <span className="code code-white">=</span>
        <span className="code code-quotes">"{props.mailData?.email}"</span>
        <span className="code code-white">{";"}</span>
      </span>
      <span className="code-line">
        <span className="code code-line-index">3</span>
        <span className="code code-tab" />
        <span className="code code-const">const</span>
        <span className="code code-var">_message</span>
        <span className="code code-white">=</span>
        <span className="code code-quotes">"{props.mailData?.message}"</span>
        <span className="code code-white">{";"}</span>
      </span>
      <span className="code-line">
        <span className="code code-line-index">4</span>
        <span className="code code-tab" />
        <span className="code code-const">const</span>
        <span className="code code-var">messageToSend</span>
        <span className="code code-white">=</span>
        <span className="code code-paren">{"{"}</span>
        <span className="code code-var-call">_name</span>
        <span className="code code-white">{","}</span>
        <span className="code code-var-call">_email</span>
        <span className="code code-white">{","}</span>
        <span className="code code-var-call">_message</span>
        <span className="code code-paren">{"}"}</span>
        <span className="code code-white">{";"}</span>
      </span>
      <span className="code-line">
        <span className="code code-line-index">5</span>
        <span className="code code-tab" />
        <span className="code code-attr">button</span>
        <span className="code code-var-call">{"."}</span>
        <span className="code code-console">addEventListener</span>
        <span className="code code-paren">{"("}</span>
      </span>
      <span className="code-line">
        <span className="code code-line-index">6</span>
        <span className="code code-tab" />
        <span className="code code-tab" />
        <span className="code code-paren code-white">{"("}</span>
        <span className="code code-console">event</span>
        <span className="code code-paren code-white">{")"}</span>
        <span className="code code-hook">{"=>"}</span>
        <span className="code code-attr">form</span>
        <span className="code code-var-call">{"."}</span>
        <span className="code code-console">send</span>
        <span className="code code-paren">{"("}</span>
        <span className="code code-var-call">messageToSend</span>
        <span className="code code-paren">{")"}</span>
        <span className="code code-paren">{")"}</span>
        <span className="code code-white">{";"}</span>
      </span>
      <span className="code-line">
        <span className="code code-line-index">7</span>
        <span className="code code-tab" />
        <span className="code code-paren">{")"}</span>
      </span>
      <span className="code-line">
        <span className="code code-line-index">8</span>
        <span className="code code-curly">{"}"}</span>
      </span>
    </div>
  );
};

export default MailCode;
