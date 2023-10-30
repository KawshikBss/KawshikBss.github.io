import IElement from "@/app/interfaces/IElement";

const getElement = (code: string) => {
    var component = "span";
    var className = "";
    var children = code;
    if (code === "\\t") {
        children = "";
        className = "code-tab";
    } else if (code === "const") {
        className = "code-const";
    } else if (code === "console.") {
        className = "code-console";
    } else if (code === "log") {
        className = "code-log";
    } else if (code === ".map") {
        className = "code-log";
    } else if (code === "=") {
        className = "code-white";
    } else if (code === ";") {
        className = "code-white";
    } else if (code === ",") {
        className = "code-comma";
    } else if (code === "(" || code === ")") {
        className = "code-paren";
    } else if (code === "=>") {
        className = "code-hook";
    } else if (code === "{" || code === "}") {
        className = "code-curly";
    } else if (code === "[" || code === "]") {
        className = "code-angular";
    } else if (code.startsWith("'") && code.endsWith("'")) {
        className = "code-quotes";
    } else if (code === "\n") {
        return { component: "br" };
    }
    return { component, children, props: { className: "code " + className } };
};

const codeKeys = ["{", "}", "[", "]", ",", ";", ":"];

const match = (line: string, code: string, start: number) => {
    return line.slice(start, start + code.length) === code
        ? start + code.length
        : false;
};

const matchKeys = (line: string, index: number) => {
    const obtainedKeys: IElement[] = [];
    for (let i = 0; i < line.length; i++) {
        if (line[i] === "\\") {
            if (line[i + 1] === "t") {
                obtainedKeys.push(getElement("\\t"));
                i++;
            }
        }
        if (line[i] === "c") {
            let codeKey = "const ";
            let keyMatched = match(line, codeKey, i);
            if (keyMatched) {
                obtainedKeys.push(getElement("const"));
                i = keyMatched;
                let varName = "";
                for (; !(line[i] === " " || line[i] === "="); i++) {
                    varName += line[i];
                }
                obtainedKeys.push({
                    ...getElement(varName),
                    props: { className: "code code-var" },
                });
            } else {
                codeKey = "console.log";
                keyMatched = match(line, codeKey, i);
                if (keyMatched) {
                    obtainedKeys.push(getElement("console."));
                    obtainedKeys.push(getElement("log"));
                }
            }
        } else if (line[i] === "=") {
            if (line[i + 1] === ">") {
                obtainedKeys.push(getElement("=>"));
                i += 2;
            } else obtainedKeys.push(getElement(line[i++]));
        } else if (codeKeys.includes(line[i])) {
            if (line[i] === ":") {
                let attrName = "";
                for (
                    let j = i - 1;
                    96 <= line.charCodeAt(j) && line.charCodeAt(j) <= 122;
                    j--
                ) {
                    if (line[j - 1] !== "\\") attrName = line[j] + attrName;
                }
                obtainedKeys.push({
                    ...getElement(attrName),
                    props: { className: "code code-attr" },
                });
            }
            obtainedKeys.push(getElement(line[i]));
        } else if (line[i] === ".") {
            if (line.slice(i, i + 4) === ".map") {
                let varName = "";
                for (
                    let j = i - 1;
                    (96 <= line.charCodeAt(j) && line.charCodeAt(j) <= 122) ||
                    line[j] === "_";
                    j--
                ) {
                    if (line[j - 1] !== "\\") varName = line[j] + varName;
                }
                obtainedKeys.push({
                    ...getElement(varName),
                    props: { className: "code code-var-call" },
                });
                obtainedKeys.push(getElement(".map"));
            }
        } else if (line[i] === "'") {
            let strValue = "'";
            i++;
            for (; line[i] !== "'"; i++) {
                strValue += line[i];
            }
            strValue += "'";
            obtainedKeys.push(getElement(strValue));
        } else if (line[i] === "(") {
            if (line[i + 1] !== "(" && line[i + 1] !== ")") {
                let varName = "";
                let j = i + 1;
                for (; line[j] !== ")"; j++) {
                    varName += line[j];
                }

                obtainedKeys.push(getElement(line[i]));
                obtainedKeys.push({
                    ...getElement(varName),
                    props: { className: "code code-attr" },
                });
                i = j - 1;
            } else {
                obtainedKeys.push(getElement(line[i]));
            }
        } else if (line[i] === ")") {
            obtainedKeys.push(getElement(line[i]));
        }
    }

    return [
        {
            component: "span",
            props: {
                className: "code-line-index",
            },
            children: `${index + 1}`,
        },
        ...obtainedKeys,
    ];
};

export const getElementsFromLine = (line: string) => {
    const elements: IElement[] = [];
    for (let index = 0; index < line.length; index++) {
        const current = line[index];
    }
};

export const parseCode = (code: string[]) => {
    const parsedCode: IElement[][] = [];
    code.map((line, index) => {
        parsedCode.push(matchKeys(line, index));
    });

    return parsedCode;
};
