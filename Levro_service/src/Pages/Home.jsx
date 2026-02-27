import tharun from "../assets/Images/Members/tharun.jpeg";
import "./Home.css";
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
  <div>
    <Helmet>
        <title>LEVROTEC Technologies | Web Development & SEO Optimization Services</title>
        <meta name="description" content="Levrotec Technologies is a digital solutions company offering professional web development, SEO optimization, scalable backend systems, and custom web applications worldwide." />
        <meta name="keywords" content="Levrotec Technologies, Web Development Services, SEO Optimization, Digital Solutions Company, Custom Web Applications" />
        <meta name="author" content="Levrotec Technologies" />
        <link rel="canonical" href="https://levrotec.com/" />
    </Helmet>
    <section className="relative bg-linear-to-br from-slate-950 via-slate-900 to-slate-800 text-white flex items-center md:min-h-screen pt-0" >

      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">

        {/* HERO CONTENT */}
        <div className="max-w-3xl">

          {/* Premium Heading */}
          <h1 className="hero-heading">
            <span className="line-1">Digital Solutions & </span>
            <span className="line-2">High-Performance Web Development</span>
            <span className="line-3">for Global Businesses</span>
          </h1>

          {/* CEO Mini Message */}
          <div className="leader-note">
            <div className="leader-avatar">
              <img src={tharun} alt="CEO" />
            </div>

            <div className="leader-message">
              <span className="leader-title">Tharun Devakumar / CEO</span>
              <p>
                At Levro, we believe building scalable digital systems is the foundation for long-term business growth.
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-6 py-3 rounded-lg transition">
              Get Started
            </button>

            <button className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-black px-6 py-3 rounded-lg transition">
              View Services
            </button>
          </div>

        </div>
      </div>

      {/* Soft Glow Background */}
      <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500/20 rounded-full blur-[120px] -z-10"></div>

    </section>
    </div>
  );
};

export default Home;
