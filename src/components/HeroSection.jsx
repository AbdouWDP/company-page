import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import AboutUs from "./AboutUs";

function HeroSection() {
  return (
    <section className="hero-section w-screen h-screen flex justify-center items-center max-md:items-start">
      <div className="w-3/4 h-4/5 flex max-md:flex-col">
        <div className="hero-section-content w-1/2 max-md:w-full h-full flex flex-col justify-between max-md:gap-4">
          <div className="text-2xl font-bold  max-lg:text-lg">
            <p>About Our Company</p>
          </div>
          <div className="text-6xl font-bold max-lg:text-4xl max-md:text-3xl">
            <h1>Delivering a premium construction experience</h1>
          </div>
          <div className="text-text max-lg:text-sm">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis
              doloremque eaque doloribus non est dolor.
            </p>
          </div>
          <div id="about" className="about-us">
            <AboutUs />
          </div>
          <div className="phone flex gap-1 items-center hover:text-sec cursor-pointer select-none">
            <div className="text-5xl text-sec max-lg:text-3xl">
              <span>
                <FaPhoneAlt />
              </span>
            </div>
            <div className="text-4xl font-bold max-lg:text-2xl">
              <p>+1 (234) 567-8910</p>
            </div>
          </div>
        </div>

        <div className="hero-section-image w-1/2 h-full flex items-center max-lg:justify-center max-md:w-full">
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
