import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid"; // Ícono de menú hamburguesa relleno
import { Link } from "react-router-dom";

function NavBarTop() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-8 pt-8 bg-transparent z-50 " >

      {/* Logo a la izquierda */}
      <Link to="/" className="h-12 w-12 hover:scale-110">
        <img
          src={`${import.meta.env.BASE_URL}7DNL6.svg`}
          alt="PPI"
          className="h-full w-full object-cover"
        />
      </Link>

      {/* Menú hamburguesa a la derecha */}
      <button onClick={toggleMenu} className="text-white hover:scale-110">
        <Bars3Icon className="h-8 w-8" />
      </button>

      {/* Menú desplegable */}
      {isMenuOpen && (
        <div className="absolute top-12 right-4 text-white rounded-md m-8">
          <ul className="flex flex-col gap-1 bg-black">
            <Link to="/tradingpage" className="pointer border  bg-black p-2 hover:bg-[#0cbfdf33] hover:border-[#0CC0DF]" onClick={() => setIsMenuOpen(false)}>Algorithmich and market analysis Software</Link>
            <Link to="/bpodevelopmentpage" className="pointer border  bg-black p-2 hover:bg-[#0cbfdf33] hover:border-[#0CC0DF]" onClick={() => setIsMenuOpen(false)}>BPO Development: Custom software solutions for your business</Link>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default NavBarTop;


