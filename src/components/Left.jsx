import React, { useState } from "react";
import Card from "./Card";
import { TfiCheck } from "react-icons/tfi";
import Table from "./Table";
import {
  TfiAgenda,
  TfiBookmarkAlt,
  TfiPackage,
} from "react-icons/tfi";
import { IoAdd } from "react-icons/io5";

const cardsData = [
  // {
  //   icon: <TfiUser />,
  //   name: "Shopkeepers",
  //   desc: "Shopkeepers",
  //   num: "2",
  //   color: "bg-red-200",
  // },
  {
    icon: <TfiPackage />,
    name: "Products",
    desc: "products",
    num: "20",
    color: "bg-blue-200",
  },
  {
    icon: <TfiAgenda />,
    name: "Stock",
    desc: "products in stock",
    num: "20",
    color: "bg-green-200",
  },
  {
    icon: <TfiBookmarkAlt />,
    name: "Sales",
    desc: "sales",
    num: "20",
    color: "bg-purple-200",
  },
];

const Left = () => {
  const [isVisible, setIsVisible] = useState(false)

  const handleVisibility = () => {
    if (!isVisible) {
      setIsVisible(true);
    }
    else {
      setIsVisible(false);
    }
  }
  console.log(isVisible);
  return (
    <div className="">
      <div className="heading text-2xl font-semibold font-jetBrains mb-10 underline">
        Dashboard
      </div>
      <div className="flex space-x-5 flex-col md:flex-row">
        {" "}
        {/* Use flex and space-x-* for horizontal layout */}
        {cardsData.map((card, index) => (
          <div key={index} className="">
            <Card
              icon={card.icon}
              name={card.name}
              desc={card.desc}
              num={card.num}
              color={card.color}
            />
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-6 my-10">
        <div className="div flex justify-between">
          <h1 className="text-2xl font-jetBrains font-semibold underline">
            All Products
          </h1>
          <button onClick={handleVisibility} className="absolute right-[36%] top-[34%] bg-lime-400 text-slate-900 font-extrabold p-4 font-jetBrains rounded-xl flex items-center gap-2"><IoAdd className="text-2xl text-slate-900" />Add Product</button>
        </div>
        <Table visible={isVisible} />
      </div>
    </div>
  );
};

export default Left;
