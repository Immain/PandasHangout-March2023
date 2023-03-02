import { Link, NavLink } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="bg-neutral">
      {/* Main Naviation*/}
      <div className="navbar max-w-[1240px] mx-auto">
        <div className="flex-1">
          <Link to="/">
            <h1 className="btn btn-ghost normal-case text-2xl font-bold text-green-400">
              Panda's Hangout
            </h1>
          </Link>
        </div>
        <div className="flex-none">
          <nav>
            <ul className="hidden menu menu-horizontal px-1 md:flex">
              <li>
                <NavLink
                  to="/"
                  exact={true}
                  activeClassName="active"
                  className="btn btn-ghost normal-case"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/About"
                  activeClassName="active"
                  className="btn btn-ghost normal-case"
                >
                  About
                </NavLink>
              </li>
              <li tabIndex={0}>
                <a>
                  Servers
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                  </svg>
                </a>
                <ul className="p-2 bg-base-100">
                  <li>
                    <NavLink
                      to="/servers/ark"
                      activeClassName="active"
                      className="btn btn-ghost normal-case"
                    >
                      Ark
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/servers/minecraft"
                      activeClassName="active"
                      className="btn btn-ghost normal-case"
                    >
                      Minecraft
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink
                  to="/Live"
                  activeClassName="active"
                  className="btn btn-ghost normal-case"
                >
                  Live
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Contact"
                  activeClassName="active"
                  className="btn btn-ghost normal-case"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
            <div onClick={handleNav} className="block md:hidden">
              {nav ? (
                <AiOutlineClose className="text-3xl text-green-400" />
              ) : (
                <TiThMenu className="text-3xl text-green-400" />
              )}
            </div>

            {/* Mobile Menu Navigation */}
            <ul
              className={
                nav
                  ? "fixed text-lg btn-sm left-0 top-0 w-[80%] h-full z-10 border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
                  : "ease-in-out duration-500 fixed left-[-100%]"
              }
            >
              <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
                PANDA'S HANGOUT
              </h1>
              <Link to="/">
                <li className="p-4 border-b border-gray-600 hover:bg-green-400 hover:text-black">
                  Home
                </li>
              </Link>
              <Link to="/About">
                <li className="p-4 border-b border-gray-600 hover:bg-green-400 hover:text-black">
                  About
                </li>
              </Link>
              <Link to="/servers/ark">
                <li className="p-4 border-b border-gray-600 hover:bg-green-400 hover:text-black">
                  <a>Ark</a>
                </li>
              </Link>
              <Link to="/servers/minecraft">
                <li className="p-4 border-b border-gray-600 hover:bg-green-400 hover:text-black">
                  <a>Minecraft</a>
                </li>
              </Link>
              <Link to="/Live">
                <li className="p-4 border-b border-gray-600 hover:bg-green-400 hover:text-black">
                  Live
                </li>
              </Link>
              <Link to="/Contact">
                <li className="p-4 border-b border-gray-600 hover:bg-green-400 hover:text-black">
                  <a>Contact</a>
                </li>
              </Link>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
