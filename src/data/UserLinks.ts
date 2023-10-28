import { AiFillCode } from "react-icons/ai";
import { FaCircleInfo } from "react-icons/fa6";
import { RiGamepadFill } from "react-icons/ri";
import { FaLinkedinIn, FaFacebookF, FaGithub } from "react-icons/fa";

export default {
  websiteLinks: [
    { href: "/", name: "_hello", icon: AiFillCode },
    { href: "/about-me", name: "_about-me", icon: FaCircleInfo },
    { href: "/projects", name: "_projects", icon: RiGamepadFill },
  ],
  socialLinks: [
    {
      href: "https://www.linkedin.com/in/kawshikbss/",
      label: "kawshikbss",
      icon: FaLinkedinIn,
    },
    {
      href: "https://www.facebook.com/kawshik.biswas/",
      label: "kawshik.biswas",
      icon: FaFacebookF,
    },
    {
      href: "https://join.skype.com/invite/r7F18oI3HdB4",
      label: "Kawshik Biswas",
      icon: FaFacebookF,
    },
    {
      href: "https://github.com/KawshikBss",
      label: "@KawshikBss",
      icon: FaGithub,
    },
  ],
};
