import Layout from "../components/Layout";

export default function Staff() {
  const staff = [
    {
      name: "MAJIN",
      role: "CEO / Founder",
      img: "https://i.pravatar.cc/300?img=11",
    },
    {
      name: "RYU",
      role: "Head Coach",
      img: "https://i.pravatar.cc/300?img=12",
    },
    {
      name: "NOVA",
      role: "Manager",
      img: "https://i.pravatar.cc/300?img=13",
    },
    {
      name: "KAI",
      role: "Analyst",
      img: "https://i.pravatar.cc/300?img=14",
    },
  ];

  return (
    <Layout>

      {/* HEADER */}
      <section className="py-24 text-center">
        <h1 className="text-5xl font-bold">
          MAJIN <span className="text-[#06A3FA]">Staff</span>
        </h1>

        <p className="text-gray-400 mt-4">
          The minds behind the domination
        </p>
      </section>

      {/* GRID */}
      <section className="px-6 pb-24">

        <div className="grid md:grid-cols-4 gap-10 max-w-6xl mx-auto">

          {staff.map((member, i) => (
            <div key={i} className="staff-card group">

              {/* IMAGE */}
              <div className="relative overflow-hidden rounded-xl">

                <img
                  src={member.img}
                  className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
                />

                {/* overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-70"></div>

              </div>

              {/* INFO */}
              <div className="p-5 text-center">

                <h2 className="text-lg font-bold tracking-widest">
                  {member.name}
                </h2>

                <p className="text-[#06A3FA] text-sm mt-1">
                  {member.role}
                </p>

              </div>

            </div>
          ))}

        </div>

      </section>

    </Layout>
  );
}