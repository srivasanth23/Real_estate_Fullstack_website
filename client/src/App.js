import "./App.css";
import Companies from "./components/Companies";
import ContactUs from "./components/ContactUs";
import Header from "./components/Header";
import Home from "./components/Home";
import ResidenciesCarousal from "./components/ResidenciesCarousal";
import Value from "./components/Value";
import GetStarted from "./components/GetStarted";
import Footer from "./components/Footer";
import ScrollBar from "./components/ScrollBar";

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
      <ContactUs />
      <GetStarted />
      <Footer />
      <ScrollBar />
    </div>
  );
}

export default App;
