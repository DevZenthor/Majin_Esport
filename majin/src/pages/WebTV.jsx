import Layout from "../components/Layout";

export default function WebTV() {
  const channel = "nomdetachaine"; // ⚠️ remplace par ton Twitch

  return (
    <Layout>

      {/* HEADER */}
      <section className="py-16 text-center">
        <h1 className="text-5xl font-bold">
          MAJIN <span className="text-[#06A3FA]">WebTV</span>
        </h1>

        <p className="text-gray-400 mt-4">
          Live streams, highlights & community
        </p>
      </section>

      {/* PLAYER + CHAT */}
      <section className="px-6 pb-20">

        <div className="webtv-container">

          {/* PLAYER */}
          <div className="webtv-player">

            {/* 🔴 LIVE */}
            <div className="live-badge">● LIVE</div>

            <iframe
              src={`https://player.twitch.tv/?channel=${channel}&parent=localhost&parent=majin-esport.vercel.app`}
              allowFullScreen
            ></iframe>

          </div>

          {/* CHAT */}
          <div className="webtv-chat">

            <div className="chat-header">
              MAJIN CHAT
            </div>

            <iframe
              src={`https://www.twitch.tv/embed/${channel}/chat?parent=localhost&parent=majin-esport.vercel.app`}
            ></iframe>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="text-center pb-24">

        <a
          href={`https://twitch.tv/${channel}`}
          target="_blank"
          rel="noreferrer"
          className="webtv-btn"
        >
          WATCH ON TWITCH
        </a>

      </section>

    </Layout>
  );
}