import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../components/Home";
import AddNote from "../components/AddNote";
import NoteDetail from "../components/NoteDetail";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="addnote" element={<AddNote />} />
        <Route path="notedetail" element={<NoteDetail />} />
      </Routes>
    </BrowserRouter>
  );
}