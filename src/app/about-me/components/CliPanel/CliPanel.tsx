import React from "react";
import styles from "./cli-panel.module.css";

type Props = {
  item?: ISubsection | ISubsectionItem | null;
};

const CliPanel = (props: Props) => {
  return (
    <div className={styles.container}>
      {props.item && (
        <>
          <h3 className={styles.heading}>
            {props.item?.role ? props.item?.role : props.item.propgrm} |{" "}
            {props.item?.location} | {props.item?.duration}
          </h3>
          {props?.item?.role ? (
            <p className={styles.content}>
              For {props.item?.duration} at {props.item?.location}, I've played
              a pivotal role as a {props.item?.role} by developing and
              maintaining both web and mobile applications. My responsibilities
              have encompassed the full software development lifecycle, from
              designing and coding to testing and deployment. I've actively
              contributed to enhancing existing applications and crafting new
              solutions, ensuring optimal functionality and user experiences. My
              work has been driven by a passion for staying current with
              emerging technologies and best practices, allowing me to deliver
              efficient and high-quality software solutions that meet the
              evolving needs of our clients and users.
            </p>
          ) : (
            <p className={styles.content}>
              During my time at {props.item.location}, I acquired a solid
              foundation in computer science, gaining proficiency in
              programming, algorithms, and data structures. This education laid
              the groundwork for my career as a software developer, providing me
              with the skills and knowledge necessary to excel in the field. My
              academic journey instilled in me a passion for problem-solving and
              a commitment to continuous learning, qualities I bring to every
              project and endeavor in my professional life.
            </p>
          )}
        </>
      )}
    </div>
  );
};

export default CliPanel;
