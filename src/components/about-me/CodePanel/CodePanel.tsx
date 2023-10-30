"use client";
import React, { useEffect, useState } from "react";
import styles from "./codepanel.module.css";
import { parseCode } from "@/lib/parseCode";
import { useAppSelector } from "@/redux/hooks";
import useSWR from "swr";

type Props = {};

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const CodePanel = (props: Props) => {
    const activeDirectory = useAppSelector(
        (state) => state.directoriesReducer.activeDirectory
    );

    const shouldFetch = activeDirectory?.code !== null;

    const {
        data: codeData,
        error,
        isLoading,
    } = useSWR(
        shouldFetch
            ? `${process.env.NEXT_PUBLIC_API_BASE}/code/${activeDirectory?.code}`
            : null,
        shouldFetch ? fetcher : null
    );

    return (
        <div className={styles.container}>
            {isLoading
                ? "Loading..."
                : error
                ? ""
                : codeData?.data?.lines
                ? parseCode(codeData.data.lines).map((line, lineIndex) => (
                      <span key={lineIndex} className="code-line">
                          {line.map((code, index) =>
                              React.createElement(
                                  code?.component,
                                  { ...code.props, key: index },
                                  code.children
                              )
                          )}
                      </span>
                  ))
                : ""}
        </div>
    );
};

export default CodePanel;
