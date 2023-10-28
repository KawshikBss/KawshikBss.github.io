import React from "react";
import styles from "./sidepanel.module.css";
import UserLinks from "@/data/UserLinks";
import Link from "next/link";

type Props = {};

const SidePanel = (props: Props) => {
  return (
    <ul className={styles.container}>
      {UserLinks.websiteLinks.map((item, index) => (
        <li key={index} className={styles.panel_item}>
          <Link href={item?.href}>
            {item?.icon && React.createElement(item?.icon)}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SidePanel;
