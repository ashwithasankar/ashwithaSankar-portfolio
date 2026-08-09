import Navbar from "./components/common/layout/Navbar";
import Container from "./components/common/ui/Container";
import SectionTitle from "./components/common/ui/SectionTitle";
import Card from "./components/common/ui/Card";
import Button from "./components/common/ui/Button";
import Hero from "./components/common/sections/Hero";
import About from "./components/common/sections/About";
import Skills from "./components/common/sections/Skills";
import Projects from "./components/common/sections/Projects";
import Experience from "./components/common/sections/Experience";
import Certificates from "./components/common/sections/Certificates";
import Contact from "./components/common/sections/Contact";
import Footer from "./components/common/layout/Footer";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Loader from "./components/common/ui/Loader";
import ScrollProgress from "./components/common/ui/ScrollProgress";

function App() {
  const [loading, setLoading] = useState(true);
 console.log(loading);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      
{loading && <Loader />}
      {!loading && (
        <>
         
          <Navbar />

          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Certificates />
            <Contact />
          </main>

          <Footer />
        </>
      )}
    </>
  );
}

export default App;
