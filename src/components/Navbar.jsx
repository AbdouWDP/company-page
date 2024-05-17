import React, { useCallback } from "react";
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

function Navbar({ open, setOpen }) {
  return (
    <>
      <header className="nvabar w-screen h-20 flex justify-center items-center">
        <button className="w-10 h-10 text-3xl" onClick={() => setOpen(true)}>
          <span>
            <FaBars />
          </span>
        </button>
      </header>

      <div
        className="overlay w-screen h-screen absolute left-0 top-0"
        style={{
          backgroundColor: "rgba(0,0,0,0.5)",
          opacity: open ? 1 : 0,
          display: open ? "block" : "none",
        }}
        onClick={() => setOpen(false)}
      ></div>

      <header
        className="navigation-bar absolute w-1/5 h-screen top-0  z-50 duration-500 ease flex justify-center items-center"
        style={{
          left: open ? 0 : "-100vw",
          backgroundColor: "rgba(0,0,0,0.9)",
        }}
      >
        <div className="w-11/12 relative" style={{ height: "95%" }}>
          <div className="text-end text-white text-4xl">
            <button onClick={() => setOpen(false)}>
              <span>
                <IoClose />
              </span>
            </button>
          </div>
          <nav className="w-full h-full">
            <ol className="w-full text-white text-center">
              <li className="hover:text-hover" onClick={() => setOpen(false)}>
                <a href="#">Home</a>
              </li>
              <li
                className="my-2 hover:text-hover"
                onClick={() => setOpen(false)}
              >
                <a href="#about">About</a>
              </li>
              <li className="hover:text-hover" onClick={() => setOpen(false)}>
                <a href="#contacts">Contact</a>
              </li>
            </ol>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Navbar;
