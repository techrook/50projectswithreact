import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../Home";
import Signup from "../Signup";
import Login from "../Login";
import Dashbord from "../Dashbord";


export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signup" element={<Signup />} />
        <Route path="Login" element={<Login />} />
        <Route path="dashboard" element={<Dashbord />} />
      </Routes>
    </BrowserRouter>
  );
}