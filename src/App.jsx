import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Popup from "./components/popup/Popup";
import "./App.css";

function App() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);


  return (
    <>
      <div id="home" className="space-y-10 sm:space-y-14 md:space-y-20">
        <Header />
        <Hero />
        <About />
        <Services />
        <Reviews />
        <Contact setOpen={setOpen} />
        <Footer />
      </div>
      <Popup open={open} setOpen={setOpen} />
    </>
  );
}

export default App;
