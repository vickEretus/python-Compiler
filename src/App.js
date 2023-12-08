// import React, { Component } from "react";
// import Compiler from "./Components/Compiler/Compiler";
// export default class App extends Component {
//   render() {
//     return (
//       <>
//         <Compiler />
//       </>
//     );
//   }
// }

// Import necessary dependencies and components
import React from "react";
import { BrowserRouter as Router, Route, Link, Routes  } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Compiler from "./Components/Compiler/Compiler";
import  "./App.css";

const NavBar = () => {
  return (
    <nav>
      <ul>
          <button>
            <Link to="/">Home</Link>
          </button>
        
          <button>
            <Link to="/about">About</Link>
          </button>
          
    
          <button>
          <Link to="/Compiler">Compiler</Link>
          </button>
        
      </ul>
    </nav>
  );
};

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Main Title */}
        <h1>PythonCoder</h1>
        {/* Navigation Bar */}
        <NavBar />

        {/* Page Content */}
        <div className="page-content">
          <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/Compiler" element={<Compiler />} />
          <Route path="/" element={<Home />} />
          </Routes>
          </div>
      </div>
    </Router>
  );
}
export default App;
