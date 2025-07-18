import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SkillsSection from './components/SkillsSection';
import { FaInstagram, FaTwitter, FaFacebookF, FaEnvelope } from 'react-icons/fa';

function App() {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <About />
        <Projects />
        <SkillsSection />
        <Contact />
        
      </main>
      <Footer />
    </div>
  );
}

export default App;
