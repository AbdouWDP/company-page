import React from "react";
import { AiOutlineCaretRight } from "react-icons/ai";

function AU() {
  return (
    <>
      <section className="au w-screen h-screen flex justify-center items-center">
        <div className="w-3/4 h-3/5 flex items-center justify-between">
          <div className="w-1/2 h-full flex flex-col justify-between ">
            <div className="text-lg font-semibold">
              <p>About Us</p>
            </div>
            <div
              className="font-bold"
              style={{ fontSize: "3.1rem", lineHeight: 1.2 }}
            >
              <h1>IT Solution Strategy Development For Your Bussiness</h1>
            </div>
            <div>
              <p>
                Article evident arrived express highest men did boy. Mistress
                sensible entirely am so. Quick can manor smart money hopes worth
                too. Comfort produce husband boy her had hearing. Law others
                theirs passed but wishes. You day real less till dear read.
              </p>
            </div>
            <div className="b-list">
              <div className="flex gap-1 items-center text-xl">
                <div className="text-2xl text-sec">
                  <span>
                    <AiOutlineCaretRight />
                  </span>
                </div>
                <div>
                  <p>Support via E-mail and Phone</p>
                </div>
              </div>
              <div className="flex gap-1 items-center text-xl mt-2">
                <div className="text-2xl text-sec">
                  <span>
                    <AiOutlineCaretRight />
                  </span>
                </div>
                <div>
                  <p>Multi-Language Support </p>
                </div>
              </div>
            </div>
            <div className="read-more-button">
              <button className="w-2/5 h-14 bg-sec rounded-full text-white font-bold">
                <p>Read More</p>
              </button>
            </div>
          </div>
          <div className="w-1/2 h-full flex items-center">
            <img
              src="https://assets.nicepagecdn.com/11a8ddce/1360600/images/portrait-smiling-construction-worker.jpg"
              alt=""
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default AU;
