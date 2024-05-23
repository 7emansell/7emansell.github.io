import './App.css';
import Header from "./components/Header";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import About from "./components/About";
import Footer from './components/Footer';
import Skills from './components/Skills';

export default function App() {
  return (
    <main className="text-[#05386B] bg-[#edf5e1] body-font">
      <Navbar />
      <Header />
      <Projects />
      {/* <Skills /> */}
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
