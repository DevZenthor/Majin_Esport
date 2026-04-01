import Layout from "../components/Layout";
import logo from "../assets/majin.png";

export default function About() {
  return (
    <Layout>

      {/* HERO */}
      <section className="about-hero">

        <div className="about-container">

          {/* LOGO */}
          <img src={logo} className="about-logo animate-logo" />

          {/* TEXT */}
          <div className="about-text-block">
            <h1 className="about-title-main">
              About <span>MAJIN</span>
            </h1>

            <p className="about-desc">
              A new generation esports organization built on ambition,
              dominance and passion.
            </p>
          </div>

        </div>

      </section>

    </Layout>
  );
}