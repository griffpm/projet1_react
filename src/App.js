import Hero from "./components/Hero";
import SectionFeatures from "./components/SectionFeatures";
import Navbar from "./components/navigation/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero />
      <main>
        <SectionFeatures />
      </main>
      
    </div>
  );
}

export default App;
