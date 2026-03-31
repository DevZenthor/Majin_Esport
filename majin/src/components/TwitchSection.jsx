export default function TwitchSection() {
  return (
    <>
      {/* 🔵 LIGNE BLEUE */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#06A3FA] to-transparent shadow-[0_0_25px_#06A3FA]" />

      <section id="twitch" className="py-24 text-center">

        <h2 className="text-4xl font-bold mb-10">
          Live <span className="text-[#F89A05]">Stream</span>
        </h2>

        <div className="flex justify-center gap-6 flex-wrap">

          <iframe
            src="https://player.twitch.tv/?channel=nomdetachaine&parent=localhost"
            height="400"
            width="700"
          ></iframe>

          <iframe
            src="https://www.twitch.tv/embed/nomdetachaine/chat?parent=localhost"
            height="400"
            width="350"
          ></iframe>

        </div>

      </section>
    </>
  );
}