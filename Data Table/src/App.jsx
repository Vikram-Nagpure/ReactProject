import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import AllRoutes from './Routes/AllRoutes';
import ThemeContextProvider from './Context/ThemeContext';

function App() {
  return (
    <ThemeContextProvider>
      <div className="app">
        <Navbar />
        <div className="content">
          <AllRoutes />
        </div>
      </div>
    </ThemeContextProvider>
  );
}

export default App;
