import React from "react";

const Card = ({ icon, name, desc, num, color }) => {
  return (
    <div className={`bg-white p-8 rounded-2xl w-72 hover:bg-slate-900 hover:text-white transition-all duration-400 ease-in`}>
      <div className="flex justify-between gap-6">
      <div
        className={`${color} p-5 rounded-full w-16 h-16 flex justify-center items-center`}
      >
        <span className="logo text-3xl">{icon}</span>
      </div>
      <div className="heading flex flex-col justify-end items-end">
        <h1 className="text-xl font-medium">{name}</h1>
        <div className="">
          <span className="font-jetBrains font-extrabold text-4xl">
            {num}
          </span>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Card;
