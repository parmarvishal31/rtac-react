// import Header from "./components/Header";
import StickyFooter from "./components/StickyFooter";
import Footer from "./components/Footer";
import EnquiryForm from "./components/EnquiryForm";
import About from "./pages/About";
import Courses from "./pages/Courses";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import { useRef } from "react";
import HeaderOld from "./components/HeaderOld";
import Contact from "./pages/Contact";
import SliderTwo from "./components/SliderTwo";
import Gols from "./components/Gols";
import Why from "./components/Why";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const coursesRef = useRef(null);
  const contactRef = useRef(null);
  const membershipRef = useRef(null);
  const scrollToSection = (refEle) => {
    window.scrollTo({
      top: refEle.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div className="flex flex-col min-h-screen mb-10 sm:mb-10  md:mb-10 lg:mb-1 relative font-josefin">
        <div className="flex-grow relative overflow-auto">
          <HeaderOld
            homeRef={homeRef}
            aboutRef={aboutRef}
            coursesRef={coursesRef}
            contactRef={contactRef}
            membershipRef={membershipRef}
            scrollToSection={scrollToSection}
          />
          <main className="mt-4   overflow-auto lg:flex lg:justify-between">
            <div className="lg:w-3/4 mx-1">
              <SliderTwo />
            </div>
            <div className=" lg:block lg:w-1/4 lg:pl-3 mt-4 lg:mt-0">
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
          {/* <div ref={membershipRef} className="mt-10">
            <div className="flex justify-center items-center">
              <span className="text-3xl font-bold font-serif border-b-2 border-yellow-300">
                We Are Providing
              </span>
            </div>
            <div>
              <Pricing />
            </div>
          </div> */}
          <div>
            <Why />
          </div>
          <div className="mt-4">
            <div className="flex justify-center items-center ">
              <div className="text-2xl border-b-2 font-serif border-yellow-300 lg:text-3xl font-semibold text-center">
                Our Purpose
              </div>
            </div>
            <Gols />
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
        <footer className="hidden lg:block fixed bottom-8 left-0 right-0">
          <StickyFooter />
        </footer>
      </div>
      <ScrollToTop />
    </div>
  );
}

export default App;
