import { IContact, IContactItem } from "@/app/interfaces/IContact";
import { IoMdMail } from "react-icons/io";
import { ImPhone } from "react-icons/im";
import { FaLinkedinIn, FaFacebookF, FaGithub } from "react-icons/fa";

const mail: IContactItem = {
    title: "kawshikbss@gmail.com",
    href: "kawshikbss@gmail.com",
    icon: IoMdMail,
    compopnent: true,
};

const phone: IContactItem = {
    title: "01869087870",
    icon: ImPhone,
};

const contacts: IContact = {
    title: "contacts",
    items: [mail, phone],
};

export default [contacts];
