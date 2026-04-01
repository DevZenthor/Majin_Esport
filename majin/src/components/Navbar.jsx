import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/majin.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Roster", path: "/roster" },
    { name: "WebTV", path: "/webtv" },
    { name: "Staff", path: "/staff" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur border-b border-white/10">

      <div className="flex justify-between items-center px-6 py-4">

        {/* LOGO */}
        <div className="flex items-center gap-3">
          <img src={logo} className="w-10" />
          <span className="font-bold tracking-widest">MAJIN</span>
        </div>

        {/* DESKTOP */}
        <div className="hidden md:flex gap-8 text-sm uppercase">
          {links.map((link) => (
            <NavLink key={link.name} to={link.path} className="nav-link">
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* BURGER */}
        <div className="md:hidden cursor-pointer" onClick={() => setOpen(!open)}>
          ☰
        </div>

      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden flex flex-col items-center gap-6 pb-6 bg-black">

          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setOpen(false)}
              className="text-gray-300"
            >
              {link.name}
            </NavLink>
          ))}

        </div>
      )}

    </nav>
  );
}