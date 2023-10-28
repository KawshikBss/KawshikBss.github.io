import { parseCode } from "@/lib/parseCode";
import React from "react";

type Props = {
    codeId?: string;
};

const GetCode = async (codeId: string) => {
    const res = await fetch(`http://localhost:5000/code/${codeId}`);
    const data = await res.json();
    return data.data;
};

const CodeLines = async (props: Props) => {
    const codeData = await GetCode(props?.codeId ? props?.codeId : "");
    return (
        <>
            
        </>
    );
};

export default CodeLines;
