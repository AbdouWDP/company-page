import React from "react";
import { GiVibratingSmartphone } from "react-icons/gi";
import { PiFileText } from "react-icons/pi";
import { PiGearThin } from "react-icons/pi";

function AboutWorkBenefits() {
  return (
    <>
      <div className="web-marketing bg-white rounded-2xl py-10 ">
        <div className="w-11/12 m-auto flex gap-4">
          <div className="w-12 h-12 rounded-full text-3xl flex justify-center items-center bg-main text-white">
            <span>
              <PiGearThin />
            </span>
          </div>
          <div className="flex flex-col gap-2" style={{ width: "85%" }}>
            <div className="font-bold text-lg">
              <p>Developement</p>
            </div>
            <div className="text-sm">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam,
                neque?
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="developement bg-sec text-white rounded-2xl py-10  ">
        <div className="w-11/12 m-auto flex gap-4">
          <div className="w-12 h-12 rounded-full text-3xl flex justify-center items-center bg-main text-white">
            <span>
              <GiVibratingSmartphone />
            </span>
          </div>
          <div className="flex flex-col gap-2" style={{ width: "85%" }}>
            <div className="font-bold text-lg">
              <p>Web Marketing</p>
            </div>
            <div className="text-sm">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam,
                neque?
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="data-analytics bg-white rounded-2xl py-10 ">
        <div className="w-11/12 m-auto flex gap-4">
          <div className="w-12 h-12 rounded-full text-3xl flex justify-center items-center bg-main text-white">
            <span>
              <PiFileText />
            </span>
          </div>
          <div className="flex flex-col gap-2" style={{ width: "85%" }}>
            <div className="font-bold text-lg">
              <p>Data Analytics</p>
            </div>
            <div className="text-sm">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam,
                neque?
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutWorkBenefits;
