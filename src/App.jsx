import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-slate-800/80 py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Swarna Pavan Teja Reddy. Built with React &
        Tailwind.
      </footer>
    </div>
  );
}
