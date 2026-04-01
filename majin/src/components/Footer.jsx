import { FaTwitter, FaTwitch, FaDiscord } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-black">

      <div className="py-12 text-center">

        <h2 className="font-bold text-xl mb-6">MAJIN</h2>

        {/* réseaux */}
        <div className="flex justify-center gap-8 text-2xl mb-6">
          <FaTwitch className="hover:text-[#06A3FA] transition"/>
          <FaTwitter className="hover:text-[#F89A05] transition"/>
          <FaDiscord className="hover:text-[#06A3FA] transition"/>
        </div>

        {/* liens */}
        <div className="flex justify-center gap-6 text-sm text-gray-400 mb-4">
          <a href="#">Mentions légales</a>
          <a href="#">Contact</a>
        </div>

        <p className="text-gray-600 text-xs">
          © 2026 MAJIN Esport
        </p>

      </div>
    </footer>
  );
}