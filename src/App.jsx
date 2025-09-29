import Home from "./components/Home";
import Skills from "./components/Skills";
import About from "./components/About";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import Projects from "./components/Projects";

function App() {
  const [show, setShow] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  const controlHeader = () => {
    if (window.scrollY > lastScroll && window.scrollY>50) {
      setShow(false);
    } else if(window.scrollY <lastScroll) {
      setShow(true);
    }
    setLastScroll(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", controlHeader);
    return () => {
      window.removeEventListener("scroll", controlHeader);
    };
  }, [lastScroll]);
  return (
    <>
    {/* {show && <Header />} */}
        <section id="home" className="h-screen w-full snap-start">
          <Home />
        </section>
        <section id="skills" className="h-screen w-full snap-start">
          <Skills />
        </section>
        <section id="about" className="h-screen w-full snap-start">
          <About />
        </section>
        <section id="projects" className="snap-start">
          <Projects />
        </section>
      </>
  );
}

export default App;
