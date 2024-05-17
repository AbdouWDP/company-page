import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import AboutUs from "./AboutUs";

function HeroSection() {
  return (
    <section className="hero-section w-screen h-screen flex justify-center items-center">
      <div className="w-3/4 h-4/5 flex">
        <div className="hero-section-content w-1/2 h-full flex flex-col justify-between">
          <div className="text-2xl font-semibold">
            <p>About Our Company</p>
          </div>
          <div className="text-6xl font-bold">
            <h1>Delivering a premium construction experience</h1>
          </div>
          <div className="text-text">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis
              doloremque eaque doloribus non est dolor.
            </p>
          </div>
          <div className="about-us">
            <AboutUs />
          </div>
          <div className="phone flex gap-1 items-center hover:text-sec cursor-pointer select-none">
            <div className="text-5xl text-sec">
              <span>
                <FaPhoneAlt />
              </span>
            </div>
            <div className="text-4xl font-bold">
              <p>+1 (234) 567-8910</p>
            </div>
          </div>
        </div>

        <div className="hero-section-image w-1/2 h-full flex items-center">
          <img
            src="https://assets.manutd.com/AssetPicker/images/0/0/10/126/687707/Legends-Profile_Cristiano-Ronaldo1523460877263.jpg"
            alt=""
            className="w-11/12 aspect-square"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
