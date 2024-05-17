import React from "react";
import WwdCard from "./WwdCard";

function WhatWeDo() {
  return (
    <>
      <section className="what-we-do w-screen h-screen flex justify-center items-center">
        <div
          className="w-4/5 flex flex-col justify-between"
          style={{ height: "90%" }}
        >
          <div className="font-bold text-2xl text-center">
            <p>What we do</p>
          </div>
          <div className="m-auto font-extrabold text-5xl text-center">
            <p>Check Out Our Work Process</p>
          </div>
          <div className="what-we-do-cards h-3/4">
            <WwdCard />
          </div>
        </div>
      </section>
    </>
  );
}

export default WhatWeDo;
