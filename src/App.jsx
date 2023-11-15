import "./App.css";
import { CaseStudies } from "./components/CaseStudies";
import { Hero } from "./components/Hero";
import { Portfolios } from "./components/Portfolios";
import { Services } from "./components/Services";
import { Navbar } from "./components/navbar";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Portfolios />
      <CaseStudies/>
    </>
  );
}

export default App;
