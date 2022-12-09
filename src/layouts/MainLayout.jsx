import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Drawer from "../components/Drawer";

export default function MainLayout({ addOrDeleteFromCart, cart }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="wrapper clear">
      {open ? (
        <Drawer
          addOrDeleteFromCart={addOrDeleteFromCart}
          cart={cart}
          setOpen={setOpen}
        />
      ) : null}
      <Header setOpen={setOpen} />
      <Outlet />
    </div>
  );
}
