import Header from "./components/Header";
import StickyFooter from "./components/StickyFooter";
import Footer from "./components/Footer";
import Slider from "./components/Slider";
import EnquiryForm from "./components/EnquiryForm";
import { motion } from "framer-motion";
import About from "./pages/About";
import Courses from "./pages/Courses";

function App() {
  return (
    <div className="flex flex-col min-h-screen mb-11 sm:mb-2 relative">
      <div className="flex-grow relative overflow-auto">
        <Header />
        <main className="pt-20 mt-2 overflow-auto lg:flex lg:justify-between">
          <div className="lg:w-3/4 mx-1">
            <Slider />
          </div>
          <motion.div
            className="hidden lg:block lg:w-1/4 lg:pl-3 mt-4 lg:mt-0"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <EnquiryForm />
          </motion.div>
        </main>
        <div>
          <About />
        </div>
        <div className="mt-2">
          <Courses />
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
