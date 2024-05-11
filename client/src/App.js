import "./App.css";
import Companies from "./components/Companies";
import ContactUs from "./components/ContactUs";
import Header from "./components/Header";
import Home from "./components/Home";
import ResidenciesCarousal from "./components/ResidenciesCarousal";
import Value from "./components/Value";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <Home />
      </div>
      <Companies />
      <ResidenciesCarousal />
      <Value />
      <ContactUs/>
    </div>
  );
}

export default App;
