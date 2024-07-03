import {FaShoppingCart} from "react-icons/fa"
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useEffect,useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import logo from "../assets/logo1.png"
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {cart} = useSelector((state) => state);

  useEffect(() => {
    localStorage.setItem("cartLength", cart.length);
  }, [cart]);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
    <nav className="flex justify-between items-center h-20 w-full px-5 shadow-md">
      <NavLink to="/main">
        <div className="flex items-center">
          <img src={logo} className="h-14 w-14 rounded-full" alt="Logo" />
        </div>
      </NavLink>

      <div className="hidden md:flex items-center font-medium text-black space-x-6">
        <NavLink to="/" className="hover:underline">
          Home
        </NavLink>
        <NavLink to="/login" className="px-2 py-1 hover:bg-slate-200 border-2">
          Login
        </NavLink>
        <NavLink to="/signup" className="px-2 py-1 hover:bg-slate-200 border-2">
          Signup
        </NavLink>
        <NavLink to="/cart">
          <div className="relative">
            <FaShoppingCart className="text-2xl" />
            {cart.length > 0 && (
              <span
                className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex 
                  justify-center items-center animate-bounce rounded-full text-black"
              >
                {cart.length}
              </span>
            )}
          </div>
        </NavLink>
      </div>

      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="focus:outline-none">
          {isOpen ? <AiOutlineClose className="text-2xl" /> : <AiOutlineMenu className="text-2xl" />}
        </button>
      </div>
    </nav>

    {isOpen && (
      <div className="md:hidden flex flex-col items-center bg-white w-full py-2 space-y-4 shadow-md">
        <NavLink to="/main" className="hover:underline" onClick={toggleMenu}>
          Home
        </NavLink>
        <NavLink to="/login" className="px-2 py-1 hover:bg-slate-200 border-2" onClick={toggleMenu}>
          Login
        </NavLink>
        <NavLink to="/signup" className="px-2 py-1 hover:bg-slate-200 border-2" onClick={toggleMenu}>
          Signup
        </NavLink>
        <NavLink to="/cart" onClick={toggleMenu}>
          <div className="relative">
            <FaShoppingCart className="text-2xl" />
            {cart.length > 0 && (
              <span
                className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex 
                  justify-center items-center animate-bounce rounded-full text-black"
              >
                {cart.length}
              </span>
            )}
          </div>
        </NavLink>
      </div>
      
    )}
    </div>
  )

};

export default Navbar;
