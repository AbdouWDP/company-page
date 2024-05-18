import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

function WwdCard() {
  return (
    <>
      <div className="what-we-do-card h-full flex flex-col items-center justify-evenly max-md:gap-6 max-xl:gap-2 text-center">
        <div className="wwd-card-image w-3/5 max-md:w-1/2 aspect-square relative">
          <img
            src="https://images01.nicepagecdn.com/a1389d7bc73adea1e1c1fb7e/2c9808cbd72b5fffb356fe58/pexels-photo-2058138.jpeg"
            alt=""
            className="w-full h-full rounded-full object-cover"
          />
          <div
            className="w-1/2 aspect-square rounded-full bg-main absolute right-0 top-1/2 flex justify-center items-center"
            style={{ transform: "translate(-50%, -50%)", right: "-50%" }}
          >
            <p className="text-5xl text-white font-bold">01</p>
          </div>
        </div>
        <div className="text-text">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            deserunt quis recusandae consequatur nesciunt unde.
          </p>
        </div>
        <div className="w-1/2 h-16 max-xl:h-14 bg-sec rounded-full text-white">
          <button className="w-full h-full uppercase flex justify-center items-center gap-1">
            <span>
              <FaPhoneAlt />
            </span>
            <p>Call Now</p>
          </button>
        </div>
      </div>

      <div className="what-we-do-card h-full flex flex-col items-center justify-evenly max-md:gap-6 max-xl:gap-2 text-center">
        <div className="wwd-card-image w-3/5 max-md:w-1/2 aspect-square relative">
          <img
            src="https://images01.nicepagecdn.com/a1389d7bc73adea1e1c1fb7e/81cd18bc3a2052f7954fa01c/pexels-photo-2102415.jpeg"
            alt=""
            className="w-full h-full rounded-full object-cover"
          />
          <div
            className="w-1/2 aspect-square rounded-full bg-main absolute right-0 top-1/2 flex justify-center items-center"
            style={{ transform: "translate(-50%, -50%)", right: "-50%" }}
          >
            <p className="text-5xl text-white font-bold">02</p>
          </div>
        </div>
        <div className="text-text">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            deserunt quis recusandae consequatur nesciunt unde.
          </p>
        </div>
        <div className="w-1/2 h-16 max-xl:h-14 bg-sec rounded-full text-white">
          <button className="w-full h-full uppercase flex justify-center items-center gap-1">
            <span>
              <FaPhoneAlt />
            </span>
            <p>Call Now</p>
          </button>
        </div>
      </div>

      <div className="what-we-do-card h-full flex flex-col items-center justify-evenly max-md:gap-6 max-xl:gap-2 text-center">
        <div className="wwd-card-image w-3/5 max-md:w-1/2 aspect-square relative">
          <img
            src="https://images.pexels.com/photos/2451568/pexels-photo-2451568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            className="w-full h-full rounded-full object-cover"
          />
          <div
            className="w-1/2 aspect-square rounded-full bg-main absolute right-0 top-1/2 flex justify-center items-center"
            style={{ transform: "translate(-50%, -50%)", right: "-50%" }}
          >
            <p className="text-5xl text-white font-bold">03</p>
          </div>
        </div>
        <div className="text-text">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            deserunt quis recusandae consequatur nesciunt unde.
          </p>
        </div>
        <div className="w-1/2 h-16 max-xl:h-14 bg-sec rounded-full text-white">
          <button className="w-full h-full uppercase flex justify-center items-center gap-1">
            <span>
              <FaPhoneAlt />
            </span>
            <p>Call Now</p>
          </button>
        </div>
      </div>
    </>
  );
}

export default WwdCard;
