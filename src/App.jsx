import React, { useCallback, useEffect, useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
  }, []);

  return (
    <>
      <Navbar open={open} setOpen={setOpen} />
      <Home />
    </>
  );
}

export default App;
