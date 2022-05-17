import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Bio from "./components/Bio";
import Contact from "./components/Contact";
import Project from "./components/Project";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Bio></Bio>
      <Project></Project>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
