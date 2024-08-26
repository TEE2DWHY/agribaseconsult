import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Animate from "./libs/Animate";
import ParentWrapper from "./Reusable/ParentWrapper";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Products from "./pages/Products/Products";

const App = () => {
  return (
    <>
      <Router>
        <Animate>
          <ParentWrapper>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/product" element={<Products />} />

            </Routes>
          </ParentWrapper>
        </Animate>
      </Router>
    </>
  );
};

export default App;
