"use client";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX, FiInstagram, FiFacebook } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { title: "Home", url: "/", id: 1 },
  { title: "About", url: "/about", id: 2 },
  { title: "Work", url: "/work", id: 3 },
  { title: "Contact", url: "/contact", id: 4 },
];
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="w-full flex items-center justify-center h-20  absolute top-0 left-0 z-999 text-white">
      <nav className="mx-auto max-w-375 flex items-center justify-between w-full h-full px-5">
        <Link
          href="/"
          className="uppercase font-bold tracking-wide mix-blend-difference"
        >
          BoostBros
        </Link>

        <div className="flex items-center justify-between gap-6 text-sm">
          <div className="gap-6 hidden md:flex">
            {links.map((item) => {
              return (
                <div
                  key={item.id}
                  className="group overflow-hidden relative transition-colors duration-300"
                >
                  <Link
                    className="block transition-transform duration-300 group-hover:-translate-y-6"
                    href={item.url}
                  >
                    {item.title}
                  </Link>

                  <Link
                    className="absolute left-0 top-16 block transition-transform duration-300 group-hover:-translate-y-16"
                    href={item.url}
                  >
                    {item.title}
                  </Link>
                </div>
              );
            })}
          </div>

          <Link
            href="/"
            className="bg-secondary hover:bg-[#fc5a3a] transition-colors duration-300 hidden md:flex rounded-full px-5 py-2 ring-2 ring-[#fc5a3a] text-sm"
          >
            <p>Let's Talk</p>
          </Link>
        </div>
        {/* Hamburger  */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl cursor-pointer z-100 bg-orange p-1 rounded-lg"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 md:hidden z-99"
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            {/* Dark overlay */}
            <div
              className="absolute inset-0 bg-primary/2 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />

            {/* Right panel */}
            <div className="absolute right-0 top-0 h-full w-72 bg-black border-l border-white/10 px-6 py-10 flex flex-col gap-8">
              <div className="flex justify-between items-center mb-4">
                <span className="uppercase tracking-widest text-2xl -mt-3 text-neutral-400">
                  Menu
                </span>
              </div>

              <div className="flex flex-col gap-6">
                {links.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="group overflow-hidden relative text-5xl font-black hover:text-orange transition-colors duration-300"
                    >
                      <Link
                        className="font-[inter]  uppercase block transition-transform duration-300 group-hover:-translate-y-14"
                        href={item.url}
                      >
                        {item.title}
                      </Link>

                      <Link
                        className="absolute left-0 top-16 block transition-all duration-300 group-hover:-translate-y-16 group-hover:text-secondary  font-[inter] uppercase"
                        href={item.url}
                      >
                        {item.title}
                      </Link>
                    </div>
                  );
                })}
              </div>

              <div className="w-full flex flex-col gap-2 items-center justify-center py-3 text-lg bg-secondary absolute left-0 right-0 bottom-0">
                <Link href="mailto:devstudio2057@gmail.com">
                  devstudio2057@gmail.com
                </Link>
                <div className="flex items-center justify-center w-full gap-2">
                  <p className="">Follow Us:</p>
                  <div className="flex gap-2">
                    <Link href="mailto:devstudio2057@gmail.com" className="border  p-2 rounded-full">
                      <FiInstagram />
                    </Link>

                    <Link href="mailto:devstudio2057@gmail.com" className="border  p-2 rounded-full">
                      <FiFacebook  />
                    </Link>

                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
