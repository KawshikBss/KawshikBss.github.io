import React from "react";
import SidePanel from "./components/SidePanel/SidePanel";
import DirectoriesPanel from "./components/DirectoriesPanel/DirectoriesPanel";
import Explorer from "./components/Explorer/Explorer";
import CodePanel from "./components/CodePanel/CodePanel";
import IDirectory from "./interfaces/IDirectory";

const GetDirectories = async () => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE}/users/dirs/kawshikbss@gmail.com`
    );
    const data = await res.json();
    return data.data;
};
type Props = {};
const AboutMe = async (props: Props) => {
    const directoriesList: IDirectory[] = await GetDirectories();
    return (
        <>
            <SidePanel />
            <DirectoriesPanel directoriesList={directoriesList} />
            <Explorer />
            <CodePanel />
            {/* 
            <DirectoriesPanel directoriesList={[]} handleTabs={handleTabs} />
            <CliPanel item={currentTab} /> */}
        </>
    );
};

export default AboutMe;
