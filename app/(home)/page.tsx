import Work from "./modules/Work";
import About from "./modules/About";
import Contact from "./modules/Contact";
import Experience from "./modules/Experience";
import Hero from "./modules/Hero";
import Skills from "./modules/Skills";


export default function Home() {
  return (
    <main>
      <Hero/>
      <About/>
      <Skills/>
      <Experience/>
      <Work/>
      <Contact/>
    </main>
  );
}
