import { MdWork } from "react-icons/md";
import AIUB from "./AIUB";
import SohojIT from "./SohojIT";
import ViralSnare from "./ViralSnare";
import { FaUniversity } from "react-icons/fa";
import { PiCertificateFill } from "react-icons/pi";

const sohojIT: ISubsectionItem = {
  label: "SohojIT",
  location: "SohojIT & Freelancing Care",
  icon: MdWork,
  href: "https://sohojearning.com/",
  role: "Software Developer",
  duration: "2022 - Current",
  content: SohojIT,
};

const viralSnare: ISubsectionItem = {
  label: "ViralSnare",
  location: "ViralSnare",
  icon: MdWork,
  href: "https://viralsnare.com/",
  role: "Software Developer",
  duration: "2022 - Current",
  content: ViralSnare,
};

const aiub: ISubsectionItem = {
  label: "BSc. CSE",
  program: "Bachelor of Science in Computer Science & Engineering",
  icon: FaUniversity,
  href: "https://www.aiub.edu/",
  location: "American International University-Bangladesh",
  duration: "2020 - 2023",
  content: AIUB,
};

const course1: ISubsectionItem = {
  label: "Introduction to HTML5",
  icon: PiCertificateFill,
  href: "https://www.coursera.org/account/accomplishments/certificate/CHFYH6JH3T4K",
  location: "Coursera",
  duration: "2020-2020",
  content: [],
};

const course2: ISubsectionItem = {
  label: "Introduction to Web Development",
  icon: PiCertificateFill,
  href: "https://www.coursera.org/account/accomplishments/certificate/EU787KKSHQQQ",
  location: "Coursera",
  duration: "2020-2020",
  content: [],
};

const course3: ISubsectionItem = {
  label: "Introduction to Game Development",
  icon: PiCertificateFill,
  href: "https://www.coursera.org/account/accomplishments/certificate/RTKPYQ53DFDL",
  location: "Coursera",
  duration: "2020-2020",
  content: [],
};

const course4: ISubsectionItem = {
  label: "Programming Foundations with JavaScript, HTML and CSS",
  icon: PiCertificateFill,
  href: "https://www.coursera.org/account/accomplishments/certificate/LBQTKA6TXZHQ",
  location: "Coursera",
  duration: "2020-2020",
  content: [],
};

const course5: ISubsectionItem = {
  label: "Introduction to Cybersecurity",
  icon: PiCertificateFill,
  href: "https://www.credly.com/badges/80c7bbf7-1a10-42ab-ad6b-c3ff2c2fe85b",
  location: "Cisco",
  duration: "2020-2020",
  content: [],
};

const course6: ISubsectionItem = {
  label: "Networking Academy Learn-A-Thon 2020",
  icon: PiCertificateFill,
  href: "https://www.credly.com/badges/7089dbd8-ae25-4685-8262-59ea7557dabe",
  location: "Cisco",
  duration: "2020-2020",
  content: [],
};

const bio: ISubsection = {
  label: "bio",
  content: [],
};

const experience: ISubsection = {
  label: "experience",
  sections: [sohojIT, viralSnare],
};

const education: ISubsection = {
  label: "education",
  sections: [aiub],
};

const certificates: ISubsection = {
  label: "cerficates",
  sections: [course1, course2, course3, course4, course5, course6],
};

export default [
  {
    label: "personal-info",
    sections: [bio, experience, education],
  },
  {
    label: "achievements",
    sections: [certificates],
  },
];
