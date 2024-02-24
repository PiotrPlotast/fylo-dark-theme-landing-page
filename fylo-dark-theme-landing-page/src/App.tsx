import "./App.css";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Features from "./Features";
import HowItWorks from "./HowItWorks";

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
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
