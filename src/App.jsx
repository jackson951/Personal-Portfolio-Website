import "./index.css";
import Navbar from "./components/common/Navbar";
import About from "./components/home/About";
import Skills from "./components/home/Skills";
import Contact from "./components/home/Contact";
import { Suspense, lazy } from "react";

// Lazy load heavier sections
const Projects = lazy(() => import("./components/home/Projects"));
const Experience = lazy(() => import("./components/home/Experience"));

// Simple loading skeleton or spinner
function LoadingFallback({ section }) {
  return (
    <div className="flex items-center justify-center py-20 animate-pulse">
      <div className="text-center">
        <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          Loading {section}...
        </p>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Navbar />

      <main className="pt-20">
        <About />
        <Skills />

        {/* Suspense wrapper ensures smooth loading */}
        <Suspense fallback={<LoadingFallback section="Projects" />}>
          <Projects />
        </Suspense>

        <Suspense fallback={<LoadingFallback section="Experience" />}>
          <Experience />
        </Suspense>

        <Contact />
      </main>
    </div>
  );
}

export default App;
