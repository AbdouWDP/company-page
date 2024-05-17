import React from "react";

function Contacts() {
  return (
    <>
      <section
        className="w-screen bg-main text-white flex justify-center items-center"
        style={{ height: "50vh" }}
      >
        <div className="w-4/5 h-3/4 flex flex-col justify-between text-center">
          <div className="font-extrabold text-5xl">
            <p>Contacts</p>
          </div>
          <div className="font-semibold text-2xl">
            <p>Call us</p>
          </div>
          <div className="contacts-number">
            <p>1 (234) 567-891</p>
            <p>1 (234) 987-654</p>
          </div>
          <div className="font-semibold text-2xl">
            <p className="underline">Location</p>
          </div>
          <div>
            <p>
              121 Rock Sreet, 21 Avenue,
              <br /> New York, NY 92103-9000
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contacts;
