import Features from "./components/FeatureSection/Features";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <div className="navbar_container">
        <Navbar></Navbar>
      </div>
      <div className="feature_container">
        <Features></Features>
      </div>
    </div>
  );
}

export default App;
