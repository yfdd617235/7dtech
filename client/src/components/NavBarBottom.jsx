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
      <button onClick={toggleGridMenu} className="text-white ">
        <Squares2X2Icon className="h-8 w-8" />
      </button>

      {/* Menú desplegable */}
      {isGridMenuOpen && (
        <div className="absolute bottom-12 left-4 bg-black text-white rounded-md m-8">
          <ul>
            <li><Link to="/grid1" onClick={() => setIsGridMenuOpen(false)}>Grid Option 1</Link></li>
            <li><Link to="/grid2" onClick={() => setIsGridMenuOpen(false)}>Grid Option 2</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default NavBarBottom;
