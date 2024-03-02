import React from "react";
import { PiTimer } from "react-icons/pi";
import { RiTimer2Fill } from "react-icons/ri";
import { ImDiamonds } from "react-icons/im";

const App = () => {
  return (
    <div className="bg-[#0C182B] flex justify-center items-center h-screen">
      {/* card */}

      <div className="bg-[#14243D] w-[350px] h-[595px] shadow-2xl rounded-2xl">
        <header >
          <img
            src="image-equilibrium.jpg"
            className="mx-auto w-[300px] mt-6 rounded-md "
            alt="imagen del card"
          />
        </header>
        <div className="px-8">
          <h1 className="py-4 font-semibold text-white text-2xl">
            Equilibrium #3429
          </h1>
          <p className="text-[#8BABD9] font-light text-[18px]">
            Our Equilibrium collection promotes balance and calm.
          </p>
          <div className="py-4 flex justify-between items-center">
            <div className="flex items-center space-x-1 text-[#00fcfcff]">
              <ImDiamonds/>
              <p className="text-[#00fcfcff]  tracking-widest">0.041ETH</p>
            </div>
            <div className="flex items-center space-x-2 mt-2">
              <span >
                <RiTimer2Fill className="text-[#8BABD9] "/>
              </span>
              <p className="text-[#8BABD9]">3 days left</p>
            </div>
          </div>
          <hr className="w-[310px] border-[#223754] border-[1px] mt-2  " />
          <div className="flex items-center gap-4 pt-4">
            <img
              src="image-avatar.png"
              className="w-[30px] border-white border-[1px] rounded-full"
              alt=""
            />
            <p className="text-[#8BABD9] tracking-wide text-[15px]">
              Creation of{" "}
              <span className="text-white font-light">Jules Wyvern</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
