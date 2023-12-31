import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Projects,
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
        <Tech />
        <Projects />
        <div className="relative z-0">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
