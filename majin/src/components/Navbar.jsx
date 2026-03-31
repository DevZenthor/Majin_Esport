import logo from "../assets/majin.png";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50">

      <div className="absolute inset-0 bg-black/50 backdrop-blur-xl border-b border-white/10"></div>

      <div className="relative flex justify-between items-center px-10 py-5">

        <div className="flex items-center gap-3 group cursor-pointer">
          <img src={logo} className="w-10 group-hover:drop-shadow-[0_0_15px_#06A3FA] transition"/>
          <span className="font-bold tracking-widest">MAJIN</span>
        </div>

        <div className="flex gap-12 uppercase text-sm tracking-widest">
          {["home","about","twitch"].map((link)=>(
            <button
              key={link}
              onClick={()=>document.getElementById(link).scrollIntoView({behavior:"smooth"})}
              className="relative group text-gray-400 hover:text-white transition"
            >
              {link}

              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-[#06A3FA]/20 to-[#F89A05]/20 blur-lg transition"></span>

              <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-gradient-to-r from-[#06A3FA] to-[#F89A05] group-hover:w-full transition-all"></span>

            </button>
          ))}
        </div>

      </div>
    </nav>
  );
}