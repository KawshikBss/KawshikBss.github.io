import AboutMe from "./ui/pages/home/about-me/about-me";
import Experience from "./ui/pages/home/experience/experience";
import Hero from "./ui/pages/home/hero/hero";
import Projects from "./ui/pages/home/projects/projects";
import Skills from "./ui/pages/home/skills/skills";
import Contact from "./ui/pages/home/contact/contact";

export default async function Home() {
    return (
        <main className="min-h-screen">
            <Hero />
            <AboutMe />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
        </main>
    );
}
