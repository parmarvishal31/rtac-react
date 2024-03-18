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
  membershipRef,
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white ">
      <nav
        className="mx-auto flex items-center justify-between p-1  px-3 "
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
          <button
            onClick={() => scrollToSection(membershipRef)}
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Membership
          </button>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
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
          <motion.div // Wrap with motion.div for animation
            initial={{ opacity: 0, y: -50 }} // Initial animation properties
            animate={{ opacity: 1, y: 0 }} // Animation properties to animate to
            transition={{ duration: 0.3 }} // Transition duration
            className="mt-6 flow-root"
          >
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <button
                  onClick={() => {
                    scrollToSection(homeRef);
                    setMobileMenuOpen(!mobileMenuOpen);
                  }}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Home
                </button>
                <button
                  onClick={() => {
                    scrollToSection(coursesRef);
                    setMobileMenuOpen(!mobileMenuOpen);
                  }}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Courses
                </button>
                <button
                  onClick={() => {
                    scrollToSection(aboutRef);
                    setMobileMenuOpen(!mobileMenuOpen);
                  }}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  About us
                </button>
                <button
                  onClick={() => {
                    scrollToSection(contactRef);
                    setMobileMenuOpen(!mobileMenuOpen);
                  }}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Contact us
                </button>
                <button
                  onClick={() => {
                    scrollToSection(membershipRef);
                    setMobileMenuOpen(!mobileMenuOpen);
                  }}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Membership
                </button>
              </div>
            </div>
          </motion.div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
