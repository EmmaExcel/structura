import "./App.css";
import { CaseStudies } from "./components/CaseStudies";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Portfolios } from "./components/Portfolios";
import { Responses } from "./components/Responses";
import { Services } from "./components/Services";
import { Team } from "./components/Team";
import { Navbar } from "./components/navbar";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Portfolios />
      <CaseStudies/>
      <Responses/>
      <Team/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
