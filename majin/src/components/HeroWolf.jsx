import logo from "../assets/majin.png";

export default function HeroWolf() {
  return (
    <section id="home" className="h-screen flex flex-col justify-center items-center relative overflow-hidden">

      {/* 🔥 BACKGROUND PRO */}
      <div className="absolute inset-0 -z-10">

        {/* base */}
        <div className="absolute inset-0 bg-[#050505]" />

        {/* lumières */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,#06A3FA15,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,#F89A0510,transparent_50%)]"></div>

        {/* grille */}
        <div className="absolute inset-0 grid-bg opacity-[0.15]"></div>

        {/* ligne centrale */}
        <div className="absolute top-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[#06A3FA]/40 to-transparent blur-sm"></div>

      </div>

      {/* halo */}
      <div className="absolute w-[400px] h-[400px] bg-[#06A3FA]/10 blur-[120px] rounded-full"></div>

      {/* logo */}
      <img
        src={logo}
        className="w-56 z-10 soft-glow drop-shadow-[0_0_40px_#06A3FA] hover:scale-105 transition duration-500"
      />

      {/* titre */}
      <h1 className="mt-6 text-6xl font-extrabold tracking-widest z-10">
        <span className="text-white">MA</span>
        <span className="text-[#06A3FA]">J</span>
        <span className="text-[#F89A05]">IN</span>
      </h1>

      <button
        onClick={()=>document.getElementById("about").scrollIntoView({behavior:"smooth"})}
        className="mt-10 text-gray-400 hover:text-[#06A3FA]"
      >
        Scroll ↓
      </button>

    </section>
  );
}