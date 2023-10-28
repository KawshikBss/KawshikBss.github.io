"use client";

import React from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import UserLinks from "@/data/UserLinks";
import { appendStyle } from "@/lib/utils";

type Props = {};

const Navbar = (props: Props) => {
  const pathname = usePathname();

  return (
    <>
      <span className={styles.nav_user}>kawshik-bss</span>
      <ul className={styles.nav_links_list}>
        {UserLinks.websiteLinks.map((item, index) => {
          return (
            <li
              key={index}
              className={appendStyle([
                styles.nav_links_list_item,
                pathname === item?.href ? styles.active : "",
              ])}
            >
              <Link href={item?.href}>{item?.name}</Link>
            </li>
          );
        })}
      </ul>
      <span
        className={appendStyle([
          styles.nav_contact_link,
          pathname === "/contact-me" ? styles.active : "",
        ])}
      >
        <Link href={"/contact-me"}>_contact-me</Link>
      </span>
    </>
  );
};

export default Navbar;
