import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import LikedPage from "../pages/LikedPage";

export default function MainRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/liked" element={<LikedPage />} />
      </Route>
    </Routes>
  );
}
