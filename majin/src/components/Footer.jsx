import { FaTwitter, FaTwitch, FaDiscord } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      {/* 🟠 LIGNE ORANGE */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#F89A05] to-transparent shadow-[0_0_25px_#F89A05]" />

      <footer className="bg-black py-12 text-center">

        <h2 className="font-bold mb-4">MAJIN</h2>

        <div className="flex justify-center gap-6 text-2xl mb-6">
          <FaTwitch className="icon-hover"/>
          <FaTwitter className="icon-hover"/>
          <FaDiscord className="icon-hover"/>
        </div>

        <p className="text-gray-500 text-sm">
          © 2026 MAJIN Esport
        </p>

      </footer>
    </>
  );
}