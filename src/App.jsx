import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Inicio from './components/inicio';
import NavbarComponent from './components/NavbarComponent';



function App() {
  return (
    <div>
      <NavbarComponent />
      <Router>
        <div className="container">
          <Routes>
            <Route path="/" element= {<Inicio/>}/>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;