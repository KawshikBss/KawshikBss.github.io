import React from "react";

type Props = {};

function Drops({}: Props) {
    return (
        <div className="flex flex-col items-center gap-4">
            <div className="w-4 h-4 rounded-full bg-[#12F7D6]" />
            <div className="w-3 h-3 rounded-full bg-[#12F7D6]" />
            <div className="w-2 h-2 rounded-full bg-[#12F7D6]" />
        </div>
    );
}

export default Drops;
