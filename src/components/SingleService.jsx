import React from "react";

function SingleService({ icon, title, text }) {
  return (
    <>
      <div className="service bg-gray h-64 rounded-3xl flex justify-center items-center text-center">
        <div className="w-11/12 h-4/5 flex flex-col items-center justify-between">
          <div className="w-14 h-14 rounded-full bg-main flex justify-center items-center text-white text-3xl">
            <span>{icon}</span>
          </div>
          <div className="font-bold text-2xl text-center">
            <p> {title} </p>
          </div>
          <div className="text-text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
              debitis totam culpa minus itaque porro!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleService;
