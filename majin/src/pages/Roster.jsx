import Layout from "../components/Layout";

export default function Roster() {
  const players = [
    {
      name: "AKUMA",
      role: "Duelist",
      img: "https://i.pravatar.cc/300?img=1",
      stats: "K/D 1.45",
    },
    {
      name: "REI",
      role: "Support",
      img: "https://i.pravatar.cc/300?img=2",
      stats: "K/D 1.20",
    },
    {
      name: "KURO",
      role: "Sniper",
      img: "https://i.pravatar.cc/300?img=3",
      stats: "K/D 1.60",
    },
  ];

  return (
    <Layout>

      {/* HEADER */}
      <section className="py-24 text-center">
        <h1 className="text-5xl font-bold">
          Our <span className="text-[#06A3FA]">Roster</span>
        </h1>
        <p className="text-gray-400 mt-4">
          Meet the elite players of MAJIN
        </p>
      </section>

      {/* GRID */}
      <section className="px-6 pb-24">
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

          {players.map((player, i) => (
            <div key={i} className="roster-card group">

              {/* IMAGE */}
              <div className="relative overflow-hidden rounded-xl">

                <img
                  src={player.img}
                  className="w-full h-80 object-cover group-hover:scale-110 transition duration-500"
                />

                {/* overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-70"></div>

                {/* role badge */}
                <span className="absolute top-3 left-3 px-3 py-1 text-xs bg-[#06A3FA] rounded-full">
                  {player.role}
                </span>

              </div>

              {/* INFO */}
              <div className="p-6 text-center">

                <h2 className="text-xl font-bold tracking-widest">
                  {player.name}
                </h2>

                <p className="text-gray-400 text-sm mt-1">
                  {player.stats}
                </p>

              </div>

            </div>
          ))}

        </div>
      </section>

    </Layout>
  );
}