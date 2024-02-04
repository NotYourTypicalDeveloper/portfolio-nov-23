import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Projects,
  Questions,
  Footer,
} from "./components";
import "./CSS/SlantedDivs.css";

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div>
          <Navbar />
          <section className="relative h-lvh lg:h-[70vh] w-full pt-10 mt-10 lg:pt-12 lg:mt-12">
            <Hero />
          </section>
          <About />
        </div>
        <section className="dot-pattern-bg">
          <Experience />
        </section>
        <Tech />
        <div className="slantedDivA">
          <Projects />
        </div>
        <div className="relative z-0">
          <Contact />
        </div>
        <div className="slantedDivA">
          <Questions />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
