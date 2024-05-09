import "./App.css";
import Companies from "./components/Companies";
import Header from "./components/Header";
import Home from "./components/Home";
import ResidenciesCarousal from "./components/ResidenciesCarousal";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <Home />
      </div>
      <Companies/>
      <ResidenciesCarousal/>
    </div>
  );
}

export default App;
