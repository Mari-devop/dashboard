import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SideBar from './components/SideBar/SideBar';
import Customers from './pages/Customers';
import './assets/css/foundation/reset.css';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <SideBar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/customers" element={<Customers />} />
        </Routes>
      
      </div>
    </Router>
    
  );
};

export default App;
