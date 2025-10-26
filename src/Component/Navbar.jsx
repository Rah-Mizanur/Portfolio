
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-colors ${
        scrolled ? "bg-amber-800 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center p-6">
 
        <h1
  className={`text-2xl font-bold transition-all duration-500 transform ${
    scrolled ? 'text-cyan-400' : 'text-amber-800 scale-100'
  }`}
>
  Mizanur
</h1>

        <nav className="hidden md:flex gap-6 font-medium text-white">
          <a href="#home" className="hover:text-cyan-400 transition-colors">Home</a>
          <a href="#service" className="hover:text-cyan-400 transition-colors">Services</a>
          <a href="#portfolio" className="hover:text-cyan-400 transition-colors">Portfolio</a>
          <a href="#test" className="hover:text-cyan-400 transition-colors">Testimonials</a>
          <a href="#blogs" className="hover:text-cyan-400 transition-colors">Blogs</a>
        </nav>

        <button className="hidden md:block btn rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-black border-black transition-all shadow-sm">
          Get Hired
        </button>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-2xl focus:outline-none"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

  
      {isOpen && (
        <div className="md:hidden bg-amber-800 px-6 pb-6 flex flex-col gap-4 text-white font-medium">
          <a href="#home" className="hover:text-cyan-400 transition-colors">Home</a>
          <a href="#service" className="hover:text-cyan-400 transition-colors">Services</a>
          <a href="#portfolio" className="hover:text-cyan-400 transition-colors">Portfolio</a>
          <a href="#test" className="hover:text-cyan-400 transition-colors">Testimonials</a>
          <a href="#blogs" className="hover:text-cyan-400 transition-colors">Blogs</a>
          <button className="btn rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-black border-black transition-all shadow-sm mt-2">
            Get Hired
          </button>
        </div>
      )}
    </header>
  );
}