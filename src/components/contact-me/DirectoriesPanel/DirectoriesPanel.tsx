import React from "react";
import Accordation from "./Accordation/Accordation";
import styles from "./directories.module.css";
import ContactUser from "@/data/ContactUser";
import { IContact, IContactItem } from "@/app/interfaces/IContact";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

type Props = {
    handleTabs?: (tab: IContactItem, type: string) => void;
};

const DirectoriesPanel = (props: Props) => {
    const {
        data: contactsList,
        error,
        isLoading,
    } = useSWR(
        `${process.env.NEXT_PUBLIC_API_BASE}/contacts/kawshikbss@gmail.com`,
        fetcher
    );
    return (
        <div className={styles.dirs_panel}>
            {ContactUser.map((section, index) => (
                <Accordation
                    key={index}
                    section={section}
                    handleTabs={props?.handleTabs}
                />
            ))}
            {isLoading || error
                ? ""
                : contactsList?.data
                ? contactsList.data.map((section: IContact, index: number) => (
                      <Accordation
                          key={index}
                          section={section}
                          handleTabs={props?.handleTabs}
                      />
                  ))
                : ""}
        </div>
    );
};

export default DirectoriesPanel;
