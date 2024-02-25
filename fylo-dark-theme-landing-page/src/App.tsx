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
      <footer className=" bg-footerBgColor">
        <div className="pt-[15.1875rem] w-24 ml-10">
          <Logo />
        </div>
        <ContactUs />
        <FooterLinks />
        <FooterSocials />
      </footer>
    </div>
  );
}

export default App;
