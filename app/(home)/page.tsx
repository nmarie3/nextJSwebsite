import Work from "./components/Work";
import About from "./modules/About";
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
    </main>
  );
}
