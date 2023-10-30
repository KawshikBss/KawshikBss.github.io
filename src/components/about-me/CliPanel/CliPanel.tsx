import React from "react";
import styles from "./cli-panel.module.css";

type Props = {
    item?: ISubsection | ISubsectionItem | null;
};

const CliPanel = (props: Props) => {
    return <div className={styles.container}></div>;
};

export default CliPanel;
