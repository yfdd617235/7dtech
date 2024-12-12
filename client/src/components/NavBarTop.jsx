import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid"; // Ícono de menú hamburguesa relleno
import { Link } from "react-router-dom";

function NavBarTop() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-8 pt-8 bg-transparent z-50 ">
      {/* Menú hamburguesa a la izquierda */}
      <button onClick={toggleMenu} className="text-white hover:scale-110">
        <Bars3Icon className="h-8 w-8" />
      </button>

      {/* Logo a la derecha */}
      <Link to="/" className="h-12 w-12 hover:scale-110">
        <img
          src={`${import.meta.env.BASE_URL}7DNL6.svg`}
          alt="PPI"
          className="h-full w-full object-cover"
        />
      </Link>

      {/* Menú desplegable */}
      {isMenuOpen && (
        <div className="absolute top-12 left-4 text-white rounded-md m-8">
          <ul className="flex flex-col gap-1 bg-black">
            <li className="pointer bg-black p-2 hover:scale-105 hover:bg-[#0cbfdf33] hover:border-[#0CC0DF]"><Link to="/tradingpage" onClick={() => setIsMenuOpen(false)}>Algorithmich and market analysis Software</Link></li>
            <li className="pointer bg-black p-2 hover:scale-105 hover:bg-[#0cbfdf33] hover:border-[#0CC0DF]"><Link to="/option2" onClick={() => setIsMenuOpen(false)}>BPO Development: Custom software solutions for your business</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default NavBarTop;

