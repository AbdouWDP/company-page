import React from "react";

function GetFreeAdvice() {
  return (
    <>
      <section
        className="get-free-advice w-full bg-sec flex justify-center items-center"
        style={{ height: "50vh" }}
      >
        <div className="w-4/5 h-3/4 bg-white rounded-3xl flex justify-center items-center">
          <div className="w-11/12 h-4/5 flex justify-between items-center flex-col max-xl:gap-4">
            <div className="text-5xl font-bold max-xl:text-4xl max-lg:text-3xl max-md:text-2xl">
              <h1>Get Free Advice</h1>
            </div>
            <div className="w-1/4 max-xl:w-full text-text text-center max-xl:text-sm">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
                voluptatibus fuga tenetur placeat?
              </p>
            </div>
            <form className="w-full flex justify-around max-xl:flex-col max-xl:gap-4 max-xl:pb-2">
              <div className="w-2/5 max-xl:w-11/12 max-xl:m-auto flex gap-1 items-center">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  placeholder="Enter your Name"
                  className="w-full h-12 bg-gray text-black rounded-full px-4 outline-none"
                />
              </div>
              <div className="w-2/5 max-xl:w-11/12 max-xl:m-auto flex gap-1 items-center">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  placeholder="Enter a valid email address"
                  className="w-full h-12 bg-gray text-black rounded-full px-4 outline-none"
                />
              </div>
              <div>
                <button
                  className="w-28 max-xl:w-full h-12 bg-sec text-white rounded-full"
                  type="submit"
                >
                  <p>Submit</p>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default GetFreeAdvice;
