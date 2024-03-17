import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { motion } from "framer-motion"; // Import framer-motion
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../assets/RTAC_Logo_Without _Border.png";

const navigation = [
  { name: "Home", to: "/" },
  { name: "Courses", to: "/courses" },
  { name: "About us", to: "/about" },
  { name: "Contact us", to: "/contact" },
];

export default function HeaderOld({
  scrollToSection,
  contactRef,
  coursesRef,
  aboutRef,
  homeRef,
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white ">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-10 p-1 lg:px-8"
        aria-label="Global"
      >
        <a
          to="/"
          className="-m-1.5 p-1.5 flex justify-center items-center gap-3"
        >
          <span className="sr-only">Your Company</span>
          <img className="h-16 w-auto" src={Logo} alt="Logo" />
          <h1 className="hidden lg:block font-semibold font-serif text-xl">
            Right track institute of advanced computing
          </h1>
        </a>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <button
            onClick={() => scrollToSection(homeRef)}
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection(coursesRef)}
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Courses
          </button>
          <button
            onClick={() => scrollToSection(aboutRef)}
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            About us
          </button>
          <button
            onClick={() => scrollToSection(contactRef)}
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Contact us
          </button>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full max-w-sm bg-white overflow-hidden">
          <div className="flex items-center justify-between px-4 py-2">
            <a to="/" className="-m-1.5 p-1.5"></a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-y-auto max-h-72" // Adjust height as needed
          >
            <div className="py-6">
              <button
                onClick={() => {
                  scrollToSection(homeRef);
                  setMobileMenuOpen(!mobileMenuOpen);
                }}
                className="block rounded-lg px-4 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
              >
                Home
              </button>
              <button
                onClick={() => {
                  scrollToSection(coursesRef);
                  setMobileMenuOpen(!mobileMenuOpen);
                }}
                className="block rounded-lg px-4 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50 mt-2"
              >
                Courses
              </button>
              <button
                onClick={() => {
                  scrollToSection(aboutRef);
                  setMobileMenuOpen(!mobileMenuOpen);
                }}
                className="block rounded-lg px-4 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50 mt-2"
              >
                About us
              </button>
              <button
                onClick={() => {
                  scrollToSection(contactRef);
                  setMobileMenuOpen(!mobileMenuOpen);
                }}
                className="block rounded-lg px-4 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50 mt-2"
              >
                Contact us
              </button>
            </div>
          </motion.div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
