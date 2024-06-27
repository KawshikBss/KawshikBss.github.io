import clsx from "clsx";
import AboutMe from "./ui/pages/home/about-me/about-me";
import Experience from "./ui/pages/home/experience/experience";
import Hero from "./ui/pages/home/hero/hero";
import Projects from "./ui/pages/home/projects/projects";
import Skills from "./ui/pages/home/skills/skills";
import localFont from "next/font/local";
import Contact from "./ui/pages/home/contact/contact";

const exoSpace = localFont({ src: "../fonts/ExoSpace.ttf" });

export default async function Home() {
    /* const userRes = await fetch(
        "http://localhost:3000/api/settings/user?id=667d280da9fed2294a2b6d00"
    );
    const { user } = await userRes.json();
    const skillsRes = await fetch(
        "http://localhost:3000/api/settings/skill?userId=667d280da9fed2294a2b6d00"
    );
    const { data: skills } = await skillsRes.json();
    const projectsRes = await fetch(
        "http://localhost:3000/api/settings/project?userId=667d280da9fed2294a2b6d00"
    );
    const { data: projects } = await projectsRes.json();
    const experiencesRes = await fetch(
        "http://localhost:3000/api/settings/experience?userId=667d280da9fed2294a2b6d00"
    );
    const { data: experiences } = await experiencesRes.json(); */

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
