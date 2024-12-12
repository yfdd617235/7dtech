import { useState } from "react";
import { Squares2X2Icon } from "@heroicons/react/24/solid"; // Ícono de cuadrícula relleno
import { Link } from "react-router-dom";

function NavBarBottom() {
  const [isGridMenuOpen, setIsGridMenuOpen] = useState(false);

  const toggleGridMenu = () => {
    setIsGridMenuOpen(!isGridMenuOpen);
  };

  return (
    <nav className="fixed bottom-0 left-0 w-full flex items-center px-8 pb-8 bg-transparent z-50">
      {/* Icono de cuadrícula a la izquierda */}
      <button onClick={toggleGridMenu} className="text-white hover:scale-110">
        <Squares2X2Icon className="h-8 w-8" />
      </button>

      {/* Menú desplegable */}
      {isGridMenuOpen && (
        <div className="absolute bottom-12 left-4 bg-black text-white rounded-md m-8">
          <ul>
            <li className="pointer bg-black p-2 hover:scale-105 hover:bg-[#0cbfdf33] hover:border-[#0CC0DF]"><Link to="/grid1" onClick={() => setIsGridMenuOpen(false)}>About us </Link></li>
            <li className="pointer bg-black p-2 hover:scale-105 hover:bg-[#0cbfdf33] hover:border-[#0CC0DF]"><Link to="/grid2" onClick={() => setIsGridMenuOpen(false)}>Contact</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default NavBarBottom;
