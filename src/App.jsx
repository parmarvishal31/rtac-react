// import Header from "./components/Header";
import StickyFooter from "./components/StickyFooter";
import Footer from "./components/Footer";
import Slider from "./components/Slider";
import EnquiryForm from "./components/EnquiryForm";
import { motion } from "framer-motion";
import About from "./pages/About";
import Courses from "./pages/Courses";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import { useRef } from "react";
import HeaderOld from "./components/HeaderOld";
import Contact from "./pages/Contact";

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const coursesRef = useRef(null);
  const contactRef = useRef(null);
  const scrollToSection = (refEle) => {
    window.scrollTo({
      top: refEle.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex flex-col min-h-screen mb-10 sm:mb-10  md:mb-10 lg:mb-1 relative font-josefin">
      <div className="flex-grow relative  overflow-auto">
        <HeaderOld
          homeRef={homeRef}
          aboutRef={aboutRef}
          coursesRef={coursesRef}
          contactRef={contactRef}
          scrollToSection={scrollToSection}
        />
        <main className=" mt-2 overflow-auto lg:flex lg:justify-between">
          <div className="lg:w-3/4 mx-1">
            <Slider />
          </div>
          <div className="hidden lg:block lg:w-1/4 lg:pl-3 mt-4 lg:mt-0">
            <EnquiryForm />
          </div>
        </main>
        <div ref={homeRef} className="">
          <Home />
        </div>
        <div ref={aboutRef}>
          <About />
        </div>
        <div ref={coursesRef} className="mt-2">
          <Courses />
        </div>
        <div ref={contactRef} className="mt-10 mb-10">
          <Contact />
        </div>
        <div className="mt-3">
          <ContactUs />
        </div>
        <div className="bg-customYellow p-2 flex justify-center items-centernpm font-bold text-white font-serif">
          <span>Copyright &copy; 2024 rtace.co.in</span>
        </div>
      </div>
      <footer className="lg:hidden fixed bottom-0 left-0 right-0">
        <Footer />
      </footer>
      <footer className="hidden lg:block fixed bottom-20 left-0 right-0">
        <StickyFooter />
      </footer>
    </div>
  );
}

export default App;
