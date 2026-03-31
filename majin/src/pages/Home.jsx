import Navbar from "../components/Navbar";
import HeroWolf from "../components/HeroWolf";
import InfoSection from "../components/InfoSection";
import TwitchSection from "../components/TwitchSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroWolf />
      <InfoSection />
      <TwitchSection />
      <Footer />
    </div>
  );
}