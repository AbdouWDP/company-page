import React, { useEffect } from "react";
import { VscProject } from "react-icons/vsc";
import { PiHandCoins } from "react-icons/pi";
import { PiUsersThree } from "react-icons/pi";
import { BsAward } from "react-icons/bs";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function Success() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".project",
      { opacity: 0, scale: 0 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "sine",
        scrollTrigger: {
          trigger: ".project",
          start: "top 80%",
          end: "bottom top",
        },
      }
    );
  }, []);

  return (
    <>
      <section
        className="w-screen flex justify-center items-center"
        style={{ height: "60vh" }}
      >
        <div className="w-3/4 h-3/4 flex justify-between items-center flex-col">
          <div className="text-5xl font-bold max-xl:text-4xl max-lg:text-3xl max-md:text-2xl">
            <h1>Consulting Successes</h1>
          </div>
          <div className="w-1/2 text-center max-md:w-full max-md:text-sm">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis officia dolorum debitis nesciunt corporis qui
              molestias nobis, eveniet ad reprehenderit sit quibusdam et facere
              repellat dolores odit nulla commodi cumque saepe corrupti vitae
              nostrum est?
            </p>
          </div>
          <div className="projects w-full h-32 flex flex-wrap max-md:gap-4">
            <div className="project w-1/4 max-md:w-full h-full flex justify-between max-md:flex-col max-md:items-center">
              <div className="success-icon text-sec text-7xl w-2/5 h-full flex justify-center items-center">
                <span>
                  <VscProject />
                </span>
              </div>
              <div className="w-3/5 h-full flex flex-col justify-center items-center">
                <div className="text-6xl font-bold">
                  <p>100</p>
                </div>
                <div className="font-semibold">
                  <p>Projects</p>
                </div>
              </div>
            </div>

            <div className="project w-1/4 h-full max-md:w-full flex justify-between max-md:flex-col max-md:items-center">
              <div className="success-icon text-sec text-7xl w-2/5 h-full flex justify-center items-center">
                <span>
                  <PiHandCoins />
                </span>
              </div>
              <div className="w-3/5 h-full flex flex-col justify-center items-center">
                <div className="text-6xl font-bold">
                  <p>40</p>
                </div>
                <div className="font-semibold">
                  <p>Clients</p>
                </div>
              </div>
            </div>

            <div className="project w-1/4 h-full max-md:w-full flex justify-between max-md:flex-col max-md:items-center">
              <div className="success-icon text-sec text-7xl w-2/5 h-full flex justify-center items-center">
                <span>
                  <PiUsersThree />
                </span>
              </div>
              <div className="w-3/5 h-full flex flex-col justify-center items-center">
                <div className="text-6xl font-bold">
                  <p>20</p>
                </div>
                <div className="font-semibold">
                  <p>Our Team</p>
                </div>
              </div>
            </div>

            <div className="project w-1/4 h-full max-md:w-full flex justify-between max-md:flex-col max-md:items-center">
              <div className="success-icon text-sec text-7xl w-2/5 h-full flex justify-center items-center">
                <span>
                  <BsAward />
                </span>
              </div>
              <div className="w-3/5 h-full flex flex-col justify-center items-center">
                <div className="text-6xl font-bold">
                  <p>76</p>
                </div>
                <div className="font-semibold">
                  <p>Awards</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Success;
