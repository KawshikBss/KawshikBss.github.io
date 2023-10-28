import React from "react";
import Accordation from "./Accordation/Accordation";
import styles from "./directories.module.css";
import IDirectory from "../../interfaces/IDirectory";

type Props = {
    directoriesList: IDirectory[];
};

const DirectoriesPanel = (props: Props) => {
    return (
        <div className={styles.dirs_panel}>
            {props.directoriesList.map((section, index) => (
                <Accordation key={index} section={section} />
            ))}
        </div>
    );
};

export default DirectoriesPanel;
