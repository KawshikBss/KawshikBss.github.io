import React from "react";
import styles from "./projectcard.module.css";
import { IProject } from "@/app/interfaces/IProject";
import Image from "next/image";
import Link from "next/link";

type Props = {
  project?: IProject;
};

const ProjectCard = (props: Props) => {
  return (
    <div className={styles.container}>
      <span className={styles.header}>
        <span className={styles.title}>
          {props?.project?.title ? props?.project?.title : "N/A"}
        </span>
      </span>
      <div className={styles.info}>
        <Image
          src={props?.project?.thumbnail ? props?.project?.thumbnail : ""}
          className={styles.thumbnail}
          alt=""
          width={370}
          height={145}
        />
        {props?.project?.type &&
          React.createElement(
            props.project.type.icon ? props.project.type.icon : ""
          )}
        <div className={styles.info_inner}>
          <p className={styles.description}>
            {props.project?.description
              ? props.project.description.length > 34
                ? props.project.description.slice(0, 31) + "..."
                : props.project.description
              : ""}
          </p>
          <Link
            href={props.project?.href ? props.project?.href : "/"}
            target="blank"
          >
            <span className={styles.source_link}>view-project</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
