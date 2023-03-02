import Footer from "./Navigation/Footer";
import Navbar from "./Navigation/Navbar";
import Hero from "./Components/Heros/MainHero";
import LiveStream from "./Components/Sections/FrontPage/LiveStream";
import Newsletter from "./Components/Sections/Newsletter/Newsletter";
import Servers from "./Components/Sections/Servers/Servers";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <LiveStream />
      <Newsletter />
      <Servers />
      <Footer />
    </div>
  );
}

export default App;
