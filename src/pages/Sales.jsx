import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Footter from "../components/Footer";
import { IoAdd } from "react-icons/io5";
import Table from "../components/Table";

const Sales = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleVisibility = () => {
    if (!isVisible) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  console.log(isVisible);
  return (
    <div>
      <div className="w-[79.5%] ml-[276px] flex flex-col justify-end align-bottom">
        <div className="body">
          <NavBar />
          <div className="">
            <div className="heading text-2xl font-semibold font-jetBrains mb-10 underline">
              {/* Products */}
            </div>
            <div className="flex space-x-4 flex-col md:flex-row"></div>
            <div className="flex flex-col gap-6 my-10">
              <div className="div flex justify-between">
                <h1 className="text-2xl font-jetBrains font-semibold underline">
                  Products in Stock
                </h1>
                <button
                  onClick={handleVisibility}
                  className=" right-[36%] top-[34%] bg-lime-400 text-slate-900 font-extrabold p-4 font-jetBrains rounded-xl flex items-center gap-2"
                >
                  <IoAdd className="text-2xl text-slate-900" />
                  Add Product
                </button>
              </div>
              <Table visible={isVisible} />
            </div>
          </div>
        </div>
        <Footter />
      </div>
    </div>
  );
};

export default Sales;
