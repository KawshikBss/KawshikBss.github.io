import clsx from "clsx";
import AboutMe from "./ui/pages/home/about-me/about-me";
import Experience from "./ui/pages/home/experience/experience";
import Hero from "./ui/pages/home/hero/hero";
import Projects from "./ui/pages/home/projects/projects";
import Skills from "./ui/pages/home/skills/skills";
import localFont from "next/font/local";
import Contact from "./ui/pages/home/contact/contact";

const exoSpace = localFont({ src: "../fonts/ExoSpace.ttf" });

export default function Home() {
    return (
        <main className={clsx("min-h-screen", exoSpace.className)}>
            <Hero />
            <AboutMe />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
        </main>
    );
}
