import React from "react";
import styles from "./footer.module.css";
import Link from "next/link";
import { FaLinkedinIn, FaFacebookF, FaGithub } from "react-icons/fa";
import UserLinks from "@/data/UserLinks";
import { getIcon } from "@/lib/utils";

interface IUserLinkItem {
    title: string;
    type: string;
    href: string;
}

interface IUserLink {
    title: string;
    items: IUserLinkItem[];
}

const GetUserLinks = async () => {
    const res = await fetch(
        "http://localhost:5000/contacts/kawshikbss@gmail.com/find-me-in"
    );
    const data = await res.json();
    return data.data;
};

type Props = {};

const Footer = async (props: Props) => {
    const userLinks: IUserLink = await GetUserLinks();
    return (
        <>
            <span className={styles.text}>Find me in:</span>
            <ul className={styles.social_links_list}>
                {userLinks.items.map((item, index) => {
                    return item.type !== "github" ? (
                        <li
                            key={index}
                            className={styles.social_links_list_item}
                        >
                            <Link href={item.href} target="_blank">
                                {React.createElement(getIcon(item.type))}
                            </Link>
                        </li>
                    ) : (
                        ""
                    );
                })}
            </ul>
            <span className={styles.github_link}>
                <Link
                    href={
                        UserLinks.socialLinks[UserLinks.socialLinks.length - 1]
                            .href
                    }
                >
                    {
                        UserLinks.socialLinks[UserLinks.socialLinks.length - 1]
                            .label
                    }
                    {UserLinks.socialLinks[UserLinks.socialLinks.length - 1]
                        ?.icon &&
                        React.createElement(
                            UserLinks.socialLinks[
                                UserLinks.socialLinks.length - 1
                            ].icon
                        )}
                </Link>
            </span>
        </>
    );
};

export default Footer;
