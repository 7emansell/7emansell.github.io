import './App.css';
import Header from "./components/Header";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import About from "./components/About";
import Footer from './components/Footer';

export default function App() {
  return (
    <main className="text-[#05386B] bg-[#5cdb95] body-font">
      <Navbar />
      <Header />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
