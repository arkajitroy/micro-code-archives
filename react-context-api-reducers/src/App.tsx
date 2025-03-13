import React from "react";
import { AuthProvider } from "./context/provider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
