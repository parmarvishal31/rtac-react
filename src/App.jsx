import Header from "./components/Header";
import StickyFooter from "./components/StickyFooter";
import Footer from "./components/Footer";
import Slider from "./components/Slider";
import EnquiryForm from "./components/EnquiryForm";
import { motion } from "framer-motion";
import About from "./pages/About";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow relative overflow-auto">
        <Header />
        <main className="pt-20 pb-20 lg:pb-44 overflow-auto">
          <div className="lg:flex lg:justify-between lg:items-center">
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
          </div>
          <div>
            <About />
          </div>
        </main>
      </div>
      <footer className="lg:hidden fixed bottom-0 left-0 right-0">
        <Footer />
      </footer>
      <footer className="hidden lg:block sticky bottom-20 lg:bottom-14 left-0 right-0">
        <StickyFooter />
      </footer>
    </div>
  );
}

export default App;
