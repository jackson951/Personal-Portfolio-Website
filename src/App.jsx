import "./index.css";
import Navbar from "./components/common/Navbar";

// Import your sections (add each file later)
import Hero from "./components/home/Hero";
import About from "./components/home/About";
import Skills from "./components/home/Skills";
import Projects from "./components/home/Projects";
import Experience from "./components/home/Experience";
import Contact from "./components/home/Contact";

function App() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Navbar />

      {/* Main Sections */}
      <main className="pt-20">
        {/* <Hero /> */}
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}

export default App;
