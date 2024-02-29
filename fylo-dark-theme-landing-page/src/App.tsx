import "./App.css";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Features from "./Features";
import HowItWorks from "./HowItWorks";
import Testimonials from "./Testimonials";
import CtaCard from "./CtaCard";
import Logo from "./Logo";
import ContactUs from "./ContactUs";
import FooterLinks from "./FooterLinks";
import FooterSocials from "./FooterSocials";
function App() {
  return (
    <div className="bg-bgColor">
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonials />
        <CtaCard />
      </main>
      <footer className="bg-footerBgColor pt-[15.1875rem] lg:pt-48 lg:mx-auto">
        <div className="w-24 ml-10 xl:mx-32">
          <Logo />
        </div>
        <div className="lg:flex lg:items-center lg:justify-between lg:space-x-8 xl:space-x-20 lg:mx-10 xl:mx-32">
          <ContactUs />
          <FooterLinks />
          <FooterSocials />
        </div>
      </footer>
    </div>
  );
}

export default App;
