export interface IContactItem {
    title: string;
    href?: string;
    icon?: React.FunctionComponent;
    type?: string;
    content?: string[];
    compopnent?: boolean;
}

export interface IContact {
    title: string;
    items: IContactItem[];
}
