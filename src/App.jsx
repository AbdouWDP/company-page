import React, { useCallback, useEffect, useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Lenis from "lenis";

function App() {
  const [open, setOpen] = useState(false);

  // const lenis = new Lenis();

  // function raf(time) {
  //   lenis.raf(time);
  //   requestAnimationFrame(raf);
  // }

  // requestAnimationFrame(raf);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [open]);

  return (
    <>
      <Navbar open={open} setOpen={setOpen} />
      <Home />
    </>
  );
}

export default App;
