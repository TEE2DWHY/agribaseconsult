import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Animate from "./libs/Animate";
import ParentWrapper from "./Reusable/ParentWrapper";

function App() {
  return (
    <>
      <Router>
        <Animate>
          <ParentWrapper>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </ParentWrapper>
        </Animate>
      </Router>
    </>
  );
}

export default App;
