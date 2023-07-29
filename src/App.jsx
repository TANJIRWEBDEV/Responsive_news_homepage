import "./App.css";
import Navbar from "./Navbar/Navbar";
import Section1 from "./section1/Section1";
import Section2 from "./section2/Section2";
function App() {
  return (
    <div className="app">
      <main className="main__container">
        <Navbar />
        <Section1 />
        <Section2 />
      </main>
    </div>
  );
}

export default App;
