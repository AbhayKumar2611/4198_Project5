import React from "react";
import { Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ScanQRCode from "./components/ScanQRCode";
import Profile from "./components/Profile";
import Inventory from "./components/Inventory";
import Settings from "./components/Settings";
import ProtectedRoutes from "./utils/ProtectedRoutes";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container mx-auto mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/scan"
            element={
              <ProtectedRoutes>
                <ScanQRCode />
              </ProtectedRoutes>
            }
          />
          <Route path="/profile" element={<Profile />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
