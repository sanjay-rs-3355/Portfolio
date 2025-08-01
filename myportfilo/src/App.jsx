import { useEffect } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <div className="section-wrapper">
          <About />
        </div>
        <div className="section-wrapper">
          <Projects />
        </div>
        <div className="section-wrapper">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
