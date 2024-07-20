import React from "react";
import { ThemeProvider } from "./ThemeContext";
import Navbar from "./Navbar";
import "./App.css";

const App = () => {
  return (
    <ThemeProvider>
      <Navbar />
    </ThemeProvider>
  );
};

export default App;
