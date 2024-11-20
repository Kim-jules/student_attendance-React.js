import React from "react";
import Card from "./Card";
import image1 from "../assets/images/31.jpeg";
import image2 from "../assets/images/3.jpeg";
import image3 from "../assets/images/15.jpeg";
import image4 from "../assets/images/32.jpeg";
import { useState } from "react";

const cardData = [
  {
    image: image1,
    name: "Apple iPhone 15 pro",
    type: "Mobile",
    desc: "Apple iPhone pro max, 12GB RAM,",
    price: "$ 999.99",
    stock: "400",
  },
  {
    image: image2,
    name: "Jordan",
    type: "Shoes",
    desc: "Dripping shoes. Men's single color shoes class shoes for parties.",
    price: "$ 57.99",
    stock: "1000",
  },
  {
    image: image3,
    name: "Women's medium length dress",
    type: "Women-Gown",
    desc: "This is one of the famous dresses for young women. It increases someone's looks and beauty",
    price: "$ 36.98",
    stock: "120",
  },
  {
    image: image4,
    name: "Apple iWatch 12 Pro",
    type: "Watch",
    desc: "Apple iWatch, 8GB RAM, 100GB Storage",
    price: "$ 80.99",
    stock: "700",
  },
];

const Right = () => {
  const [cart, setCart] = useState(0);
  return (
    <div className="flex gap-6 px-10">
      {cardData.map((card, index) => (
        <div className="product border border-green-500 rounded-2xl w-[272px] hover:bg--500/20 shadow-xl">
          <div className="image w-[270px] rounded-2xl">
        <img src={card.image} alt="product" className="rounded-t-2xl object-cover  w-96 h-96" />
          </div>
          <div className="data p-4">
          <div className="des flex justify-between text-green-500 py-2">
            <div className="name font-bold text-xl">
              {card.name}
            </div>
            <div className="type italic">
              <p>{card.type}</p>
            </div>
          </div>
          <div className="description line-clamp-1 text-lg">
            {card.desc}
          </div>
            <div className="price text-2xl font-jetBrains text-center text-green-500 py-3 font-medium italic">
              <hr className="" />
            <p className="pt-4">Price: {card.price}</p>
          </div>

          <div className="cart flex justify-between items-center">
            <button className="bg-green-500 text-white rounded-lg p-4 hover:bg-green-600 transition-all ease-in-out duration-300 ">Add to Cart</button>
            <p className="text-green-500 font-medium italic">Stock: {card.stock}</p>
          </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Right;
