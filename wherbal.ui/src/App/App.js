import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Routes from '../Helpers/routes';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes />
    </Router>
  );
}

export default App;
