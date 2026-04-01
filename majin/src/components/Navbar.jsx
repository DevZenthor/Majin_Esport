import { NavLink } from "react-router-dom";
import logo from "../assets/majin.png";

export default function Navbar() {
  const links = [
    { name: "Home", path: "/" },
    { name: "Roster", path: "/roster" },
    { name: "WebTV", path: "/webtv" },
    { name: "Staff", path: "/staff" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50">

      <div className="absolute inset-0 bg-black/70 backdrop-blur-xl border-b border-white/10"></div>

      <div className="relative flex justify-between items-center px-10 py-5">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={logo} className="w-10" />
          <span className="font-bold tracking-widest text-lg">MAJIN</span>
        </div>

        {/* Menu */}
        <div className="flex gap-10 uppercase text-sm tracking-widest">

          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `relative group ${
                  isActive ? "text-white" : "text-gray-400"
                }`
              }
            >
              {link.name}

              {/* underline animée */}
              <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-gradient-to-r from-[#06A3FA] to-[#F89A05] group-hover:w-full transition-all duration-300"></span>
            </NavLink>
          ))}

        </div>

      </div>
    </nav>
  );
}