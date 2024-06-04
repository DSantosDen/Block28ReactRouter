// Setup to import components
import { Routes, Route, Link } from "react-router-dom";
import Red from "./Red";
import Blue from "./Blue";
import Home from "./Home";

/*App is the root component of the application
It's divided into two sections #navbar and #main-section
 */
function App() {
  return (
    <div id="container">
      <div id="navbar">
        {/* 3 Hyperlinks to navigate to the corresponding page */}
        <Link to="/home">Home</Link>
        <Link to="/blue">Blue</Link>
        <Link to="/red">Red</Link>
      </div>
      <div id="main-section">
        <Routes>
          {/* 3 routes define the path and association with each component.
          Navigating /home will render the Home component*/}
          <Route path="/home" element={<Home />} />
          <Route path="/blue" element={<Blue />} />
          <Route path="/red" element={<Red />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
