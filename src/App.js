import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";

function App() {
  return (
    <>
      <Navbar title="shambhu" abouttxt="about_shambhu"/>
      <Textform heading="Enter text to analyze"/>
    </>
  );
}

export default App;
