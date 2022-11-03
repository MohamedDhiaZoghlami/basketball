import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Tour from "./components/Tour/Tour";
import Players from "./components/Players/Players";
import Games from "./components/Games/Games";
import Stadiums from "./components/Stadiums/Stadiums";
import Media from "./components/Media/Media";
import "./App.css";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Tour />
      <Players />
      <Games />
      <Stadiums />
      <Media />
      <Footer />
    </div>
  );
}

export default App;
