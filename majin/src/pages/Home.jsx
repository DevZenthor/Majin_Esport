import Layout from "../components/Layout";
import logo from "../assets/majin.png";

export default function Home() {
  const news = [
    { title: "MAJIN wins tournament", date: "12 Oct 2026" },
    { title: "New roster announcement", date: "08 Oct 2026" },
  ];

  const matches = [
    { team: "MAJIN vs NOVA", date: "12 OCT", status: "UPCOMING" },
    { team: "MAJIN vs SHADOW", date: "18 OCT", status: "UPCOMING" },
  ];

  return (
    <Layout>

      {/* 🐺 HERO */}
      <section className="h-screen flex flex-col justify-center items-center relative overflow-hidden text-center">

        {/* BACKGROUND */}
        <div className="absolute inset-0 -z-10">

          <div className="absolute inset-0 bg-gradient-to-br from-[#050505] via-[#06121a] to-[#050505]" />

          <div className="absolute w-[600px] h-[600px] bg-[#06A3FA]/10 rounded-full blur-[150px] animate-pulse"></div>

          <div className="grid-bg absolute inset-0 opacity-[0.07]"></div>

        </div>

        {/* LOGO */}
        <img src={logo} className="w-56 animate-logo" />

        {/* TITLE */}
        <h1 className="mt-6 text-6xl font-bold tracking-widest">
          MA<span className="text-[#06A3FA]">J</span>
          <span className="text-[#F89A05]">IN</span>
        </h1>

        <p className="text-gray-400 mt-4">Esport Organization</p>

      </section>

      {/* 📰 NEWS */}
      <section className="section">

        <h2 className="text-4xl font-bold mb-12">
          Latest <span className="text-[#06A3FA]">News</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

          {news.map((item, i) => (
            <div key={i} className="card group relative overflow-hidden">

              <div className="absolute inset-0 bg-gradient-to-r from-[#06A3FA]/0 to-[#06A3FA]/20 opacity-0 group-hover:opacity-100 transition"></div>

              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.date}</p>

            </div>
          ))}

        </div>

      </section>

      {/* 📅 CALENDAR */}
      <section className="section">

        <h2 className="text-4xl font-bold mb-12">
          Match <span className="text-[#F89A05]">Calendar</span>
        </h2>

        <div className="max-w-4xl mx-auto flex flex-col gap-6">

          {matches.map((m, i) => (
            <div key={i} className="calendar-card">

              <div>
                <h3 className="text-lg">{m.team}</h3>
                <p className="text-gray-400 text-sm">{m.date}</p>
              </div>

              <span className="badge">{m.status}</span>

            </div>
          ))}

        </div>

      </section>

    </Layout>
  );
}