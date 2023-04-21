import Hero from "./components/Hero";
import SectionFeatures from "./components/SectionFeatures";
import Navbar from "./components/navigation/Navbar";
import SectionTemplate from "./components/SectionTemplate";
import SectionStep from "./components/SectionStep";
import SectionComponent from "./components/SectionComponent";
import SectionFAQ from "./components/SectionFAQ";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero />
      <main>
        <SectionFeatures />
        <SectionTemplate className="bg-slate-50" />
        <SectionStep />
        <SectionComponent />
        <SectionFAQ />
       {/* <Footer /> */}
      </main>
      
    </div>
  );
}

export default App;
