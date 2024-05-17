import React from "react";
import { GiVibratingSmartphone } from "react-icons/gi";
import { SlUser } from "react-icons/sl";

function AboutUs() {
  return (
    <>
      <div className="about-company w-11/12 flex justify-between max-lg:gap-4">
        <div className="w-12 h-12 rounded-full text-3xl flex justify-center items-center bg-main text-white">
          <span>
            <GiVibratingSmartphone />
          </span>
        </div>
        <div className="flex flex-col gap-2" style={{ width: "85%" }}>
          <div className="font-bold text-2xl max-lg:text-lg">
            <p>About Our company</p>
          </div>
          <div className="text-text max-lg:text-sm">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, ea
              eligendi eos vero officia itaque.
            </p>
          </div>
        </div>
      </div>

      <div className="about-work w-11/12 flex justify-between mt-4 max-lg:gap-4">
        <div className="w-12 h-12 rounded-full text-3xl flex justify-center items-center bg-main text-white">
          <span>
            <SlUser />
          </span>
        </div>
        <div className="flex flex-col gap-2" style={{ width: "85%" }}>
          <div className="font-bold text-2xl max-lg:text-lg">
            <p>About Our Work</p>
          </div>
          <div className="text-text max-lg:text-sm">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, ea
              eligendi eos vero officia itaque.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
