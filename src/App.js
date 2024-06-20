import "./App.css";
import { Hero } from "./components/Hero";
import { PrimaryFeatures } from "./components/PrimaryFeatures";
import { SecondaryFeatures } from "./components/SecondaryFeatures";
import { CallToAction } from "./components/CallToAction";
import { Reviews } from "./components/Reviews";
import { About } from "./components/About";

function App() {
  return (
    <>
      <Hero />
      <PrimaryFeatures />
      <SecondaryFeatures />
      <CallToAction />
      <Reviews />
      <About />
    </>
  );
}

export default App;
