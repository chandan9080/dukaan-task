import Features from "./components/FeatureSection/Features";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

import Products from "./components/Products/Products";

function App() {
  return (
    <div className="App">
      <div className="navbar_container">
        <Navbar></Navbar>
      </div>
      <div className="feature_container">
        <Features></Features>
      </div>
      <div className="product_container">
        <Products></Products>
      </div>
      <div className="footer_container">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
