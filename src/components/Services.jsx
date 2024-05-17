import React from "react";
import { GiVibratingSmartphone } from "react-icons/gi";
import SingleService from "./SingleService";
import { TfiCamera } from "react-icons/tfi";
import { IoBulbOutline } from "react-icons/io5";
import { PiHouseLine } from "react-icons/pi";
import { TbWorld } from "react-icons/tb";
import { PiUsersBold } from "react-icons/pi";

function Services() {
  return (
    <>
      <section className="w-screen h-screen flex justify-center items-center">
        <div
          className="w-4/5 flex flex-col justify-between"
          style={{ height: "90%" }}
        >
          <div className="font-bold text-2xl text-center">
            <p>Our Services</p>
          </div>
          <div className="w-1/2 m-auto font-extrabold text-5xl text-center">
            <p>World Best IT-Services We Provide</p>
          </div>
          <div className="services">
            <SingleService
              icon={<GiVibratingSmartphone />}
              title=" Digital Services"
            />

            <SingleService icon={<IoBulbOutline />} title="Creative Idea" />

            <SingleService icon={<PiHouseLine />} title="Interior Design" />

            <SingleService icon={<TbWorld />} title="Online Service" />

            <SingleService icon={<PiUsersBold />} title="Unlimited Support" />

            <SingleService icon={<TfiCamera />} title="Photography" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
