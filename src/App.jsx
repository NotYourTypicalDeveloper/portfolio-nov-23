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
} from "./components";

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
        <Experience />
        <section className="dot-pattern-bg">
          <Tech />
        </section>
        <Projects />
        <div className="relative z-0">
          <Contact />
        </div>
        <Questions />
      </div>
    </BrowserRouter>
  );
}

export default App;
