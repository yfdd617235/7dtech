import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid"; // Ícono de menú hamburguesa relleno
import { Link } from "react-router-dom";

function NavBarTop() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-8 pt-8 bg-transparent z-50">
      {/* Menú hamburguesa a la izquierda */}
      <button onClick={toggleMenu} className="text-white">
        <Bars3Icon className="h-8 w-8" />
      </button>

      {/* Logo a la derecha */}
      <Link to="/" className="h-14 w-14">
        <img
          src={`${import.meta.env.BASE_URL}V_7D.svg`}
          alt="PPI"
          className="h-full w-full object-cover text-white"
        />
      </Link>

      {/* Menú desplegable */}
      {isMenuOpen && (
        <div className="absolute top-12 left-4 bg-black text-white rounded-md m-8">
          <ul>
            <li><Link to="/option1" onClick={() => setIsMenuOpen(false)}>Option 1</Link></li>
            <li><Link to="/option2" onClick={() => setIsMenuOpen(false)}>Option 2</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default NavBarTop;

