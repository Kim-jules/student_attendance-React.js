import React from "react";
import image2 from "../assets/images/2.png";

const PremiumCard = () => {
  return (
    <div className="bg-slate-900 text-white rounded-4xl p-8 w-full overflow-hidden h-[300px]">
      <div className="logo font-alexana text-xl">Edu<span className="text-lime-400">plex</span></div>
      <div className="info flex items-center justify-between">
        <div className="text grid gap-5">
          <div className="heading font-jetBrains text-3xl font-bold">
            Go premium
          </div>
          <div className="desc text-white/50">
            Explore different more features with <br />
            lifetime membership
          </div>
        </div>
        <div className="img">
          <img src={image2} alt="" />
        </div>
      </div>
      <div>
        <button className="bg-lime-400 p-4 rounded-full px-10 text-slate-900 font-jetBrains font-extrabold hover:bg-lime-600 transition-all ease-in-out duration-300 hover:text-white">
          Get access
        </button>
      </div>
      <div className="bg-lime-400/50 flex ml-80 rounded-full w-96 h-96 -translate-y-16"></div>
    </div>
  );
};

export default PremiumCard;
