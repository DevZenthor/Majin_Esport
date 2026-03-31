import logo from "../assets/majin.png";

export default function HeroWolf() {
  return (
    <section id="home" className="h-screen flex flex-col justify-center items-center relative overflow-hidden">

      <div className="absolute inset-0">

        <div className="hero-glow"></div>

        <div className="absolute w-[450px] h-[450px] border border-[#06A3FA]/30 rounded-full spin-slow"></div>

        <div className="absolute w-[550px] h-[550px] border border-[#F89A05]/20 rounded-full spin-reverse"></div>

        <div className="absolute w-[400px] h-[2px] bg-[#06A3FA] rotate-45 top-1/3 left-1/4 blur-md animate-pulse"></div>
        <div className="absolute w-[400px] h-[2px] bg-[#F89A05] -rotate-45 bottom-1/3 right-1/4 blur-md animate-pulse"></div>

        <div className="particles"></div>

      </div>

      <img src={logo} className="w-56 z-10 drop-shadow-[0_0_40px_#06A3FA] hover:scale-110 transition"/>

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