import { useState } from "react";
import { Squares2X2Icon } from "@heroicons/react/24/solid"; // Ícono de cuadrícula relleno
import { Link } from "react-router-dom";

function NavBarBottom() {
  const [isGridMenuOpen, setIsGridMenuOpen] = useState(false);

  const toggleGridMenu = () => {
    setIsGridMenuOpen(!isGridMenuOpen);
  };

  return (
    <nav className="fixed bottom-0 right-0 flex items-center px-8 pb-8 bg-transparent z-50">
      {/* Icono de cuadrícula en la esquina inferior derecha */}
      <div className="relative">
        <button onClick={toggleGridMenu} className="text-white hover:scale-110">
          <Squares2X2Icon className="h-8 w-8" />
        </button>

        {/* Menú desplegable */}
        {isGridMenuOpen && (
          <div className="absolute bottom-10 right-0 bg-black text-white rounded-md m-4">
            <ul className="flex flex-col gap-1 bg-black">
              <Link
                to="/aboutus"
                className="whitespace-nowrap pointer border bg-black p-2 hover:bg-[#0cbfdf33] hover:border-[#0CC0DF]"
                onClick={() => setIsGridMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/grid2"
                className="pointer border bg-black p-2 hover:bg-[#0cbfdf33] hover:border-[#0CC0DF]"
                onClick={() => setIsGridMenuOpen(false)}
              >
                Contact
              </Link>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBarBottom;

