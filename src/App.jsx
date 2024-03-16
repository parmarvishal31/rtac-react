import Header from "./components/Header";
import StickyFooter from "./components/StickyFooter";
import Footer from "./components/Footer";
import Slider from "./components/Slider";
import EnquiryForm from "./components/EnquiryForm";
import { motion } from "framer-motion";
import About from "./pages/About";
import Courses from "./pages/Courses";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";

function App() {
  return (
    <div className="flex flex-col min-h-screen mb-10 sm:mb-10  md:mb-10 lg:mb-1 relative">
      <div className="flex-grow relative overflow-auto">
        <Header />
        <main className="pt-20 mt-2 overflow-auto lg:flex lg:justify-between">
          <div className="lg:w-3/4 mx-1">
            <Slider />
          </div>
          <div className="hidden lg:block lg:w-1/4 lg:pl-3 mt-4 lg:mt-0">
            <EnquiryForm />
          </div>
        </main>
        <div>
          <Home />
        </div>
        <div>
          <About />
        </div>
        <div className="mt-2">
          <Courses />
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
