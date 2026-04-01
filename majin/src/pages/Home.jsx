import Layout from "../components/Layout";
import logo from "../assets/majin.png";

export default function Home() {
  const news = [
    { title: "MAJIN wins tournament", date: "12 Oct 2026" },
    { title: "New roster announced", date: "08 Oct 2026" },
  ];

  const matches = [
    { team: "MAJIN vs NOVA", date: "12 OCT", status: "UPCOMING" },
    { team: "MAJIN vs SHADOW", date: "18 OCT", status: "UPCOMING" },
  ];

  return (
    <Layout>

      {/* 🐺 HERO */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">

        <img src={logo} className="w-48 animate-logo mb-6" />

        <h1 className="text-6xl font-bold tracking-widest">
          MA<span className="text-[#06A3FA]">J</span>
          <span className="text-[#F89A05]">IN</span>
        </h1>

        <p className="text-gray-400 mt-4">
          Next generation esports organization
        </p>

      </section>

      {/* 📰 NEWS */}
      <section className="section">

        <h2 className="section-title">
          Latest <span>News</span>
        </h2>

        <div className="news-grid grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

          {news.map((item, i) => (
            <div key={i} className="news-card">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="calendar-date mt-2">{item.date}</p>
            </div>
          ))}

        </div>

      </section>

      {/* 📅 CALENDAR */}
      <section className="section">

        <h2 className="section-title">
          Match <span>Calendar</span>
        </h2>

        <div className="flex flex-col gap-6 max-w-4xl mx-auto">

          {matches.map((m, i) => (
            <div key={i} className="calendar-card">

              <div className="calendar-left">
                <h3 className="text-lg">{m.team}</h3>
                <p className="calendar-date">{m.date}</p>
              </div>

              <span className="badge">{m.status}</span>

            </div>
          ))}

        </div>

      </section>

      {/* 🎥 VIDEOS */}
      <section className="section">

        <h2 className="section-title">
          Latest <span>Videos</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

          <iframe
            className="w-full h-64 rounded-xl"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          ></iframe>

          <iframe
            className="w-full h-64 rounded-xl"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          ></iframe>

        </div>

      </section>

    </Layout>
  );
}