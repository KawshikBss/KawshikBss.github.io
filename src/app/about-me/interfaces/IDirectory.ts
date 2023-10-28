export interface IFile {
    _id: string;
    contentType: string;
    label: string;
    title: string;
    href: string;
    code: string[];
}

export default interface IDirectory {
    _id: string;
    title: string;
    sections?: IDirectory[];
    files?: IFile[];
}
