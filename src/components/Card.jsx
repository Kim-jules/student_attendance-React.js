import React from "react";

const Card = ({ data }) => {
  return (
    <div>
      <div className="card">
        {data.map((card, index) => {
          <div>
            <div className="img">
              <img src={card.image} alt="" />
            </div>
            <div className="desc">
              <div className="name"><h1>{card.name}</h1></div>
            </div>
          </div>
        })}
      </div>
    </div>
  );
};

export default Card;
