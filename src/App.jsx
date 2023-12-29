import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Projects,
  StarsCanvas,
} from "./components";

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div>
          <Navbar />
          <section className="relative w-full h-auto pt-10 mt-10 lg:pt-12 lg:mt-12">
            <Hero />
            <div
              style={{
                backgroundImage:
                  "linear-gradient(to bottom, rgba(255,0,0,0) 20%, #050816 80%)",
              }}
            >
              <About />
            </div>
            <StarsCanvas />
          </section>
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
