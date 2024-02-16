import About from "./components/About";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="bg-custom-color text-white">
      <Navbar />
      <Hero />
      <About/>
      <Skills />
      <Projects />
      <Education />
      <Footer />
    </div>
  );
}

export default App;
