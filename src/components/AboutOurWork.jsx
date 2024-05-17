import React, { useEffect } from "react";
import AboutWorkBenefits from "./AboutWorkBenefits";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function AboutOurWork() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const st = {
      trigger: ".work-section",
      start: "top center",
      end: "bottom center",
      toggleActions: "play none none none",
    };

    gsap.fromTo(
      ".num-container",
      { opacity: 0, x: -100, rotate: -180 },
      {
        opacity: 1,
        x: 0,
        rotate: 0,
        duration: 1,
        ease: "power1",
        scrollTrigger: st,
      }
    );

    gsap.fromTo(
      ".work-desc",
      { opacity: 0, x: 100 },
      { opacity: 1, x: 0, duration: 1, ease: "power1", scrollTrigger: st }
    );
  }, []);

  return (
    <>
      <section className="w-screen" style={{ height: "50vh" }}>
        <div className="w-full h-full bg-gray flex justify-center items-center">
          <div className="w-3/4 h-4/5 flex flex-col justify-between">
            <div className="text-xl font-bold text-center">
              <p>About Our Work</p>
            </div>
            <div className="w-3/5 m-auto font-extrabold text-5xl text-center">
              <p>Our success is built on a foundation of reliability</p>
            </div>
            <div className="about-work-benifits">
              <AboutWorkBenefits />
            </div>
          </div>
        </div>
      </section>
      <section className="work-section w-screen h-screen flex justify-center items-center">
        <div className="w-3/4 h-4/5 flex">
          <div className="work-img w-1/2 h-full relative">
            <img
              src="https://assets.nicepagecdn.com/11a8ddce/1360600/images/front-view-male-builder-white-helmet-posing-light-background.jpg"
              alt=""
              className="w-4/5 aspect-square object-cover"
            />
            <div
              className="work-desc w-3/5 aspect-video rounded-2xl  ml-auto bg-sec text-white flex justify-center items-center relative z-50"
              style={{ marginTop: "-100px" }}
            >
              <div className="w-4/5 h-3/5 text-xl font-bold">
                We collaborate with brands and agencies to create memorable
                experiences.
              </div>
            </div>
          </div>
          <div className="u-container w-1/2 h-full flex justify-center items-center ">
            <div className="w-4/5" style={{ height: "90%" }}>
              <div className="num-01 flex flex-col gap-12">
                <div className="num-container w-20 aspect-square bg-main flex justify-center items-center text-5xl font-bold text-white">
                  <p>01</p>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="font-bold text-sm">
                    <h2>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Alias, mollitia.
                    </h2>
                  </div>
                  <div className="text-lg text-text">
                    <p>
                      The principal reason we continue to adapt and evolve our
                      business model is to ensure that we are meeting our
                      customers’ expectations. One example of this has been to
                      use modern technology and the introduction of the real
                      time tracking our teams using GPS.
                    </p>
                  </div>
                </div>
              </div>

              <div className="num-02 flex flex-col gap-12 mt-10">
                <div className="num-container w-20 aspect-square bg-main flex justify-center items-center text-5xl font-bold text-white">
                  <p>02</p>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="font-bold text-sm">
                    <h2>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Alias, mollitia.
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutOurWork;
