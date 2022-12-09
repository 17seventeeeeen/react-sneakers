import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import LikedPage from "../pages/LikedPage";
import UserPage from "../pages/UserPage";

export default function MainRoutes({ addOrDeleteFromCart, cart }) {
  return (
    <Routes>
      <Route
        element={
          <MainLayout addOrDeleteFromCart={addOrDeleteFromCart} cart={cart} />
        }
      >
        <Route
          path="/"
          element={
            <HomePage cart={cart} addOrDeleteFromCart={addOrDeleteFromCart} />
          }
        />
        <Route path="/liked" element={<LikedPage />} />
        <Route path="/user" element={<UserPage />} />
      </Route>
    </Routes>
  );
}
