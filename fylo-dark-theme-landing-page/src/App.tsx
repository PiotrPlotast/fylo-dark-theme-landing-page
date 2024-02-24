import "./App.css";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Features from "./Features";
function App() {
  return (
    <div className="bg-bgColor">
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <Features />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
