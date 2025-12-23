import Hero from "../components/Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Experience from "../components/Experience";
import Contact from "./Contact";

const Home = () => {
    return (
        <div className="pt-[120px] md:pt-[1px]">
            <section id="hero" className="scroll-mt-[100px] ">
                <Hero />
            </section>

            <section id="about" className="scroll-mt-[100px]">
                <About />
            </section>

            <section id="skills" className="scroll-mt-[100px]">
                <Skills />
            </section>

            <section id="projects" className="scroll-mt-[100px]">
                <Projects />
            </section>

            <section id="experience" className="scroll-mt-[100px]">
                <Experience />
            </section>

            <section id="contact" className="scroll-mt-[100px]">
                <Contact />
            </section>

        </div>
    );
};

export default Home;
