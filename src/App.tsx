import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Animate from "./libs/Animate";
import styles from "./index.module.scss";

function App() {
  return (
    <>
      <div className={styles.body}>
        <Router>
          <Animate>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Animate>
        </Router>
      </div>
    </>
  );
}

export default App;
