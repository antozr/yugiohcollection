import "./style.scss";
import React from "react";

const BigCard = () => {
  return (
    <div className="bigCard">
      <div className="bigCard__boxTitle1">
        <h2 className="sect__title sect_title--nafa">Dragon</h2>
      </div>

      <div className="bigCard__main">
        <div className="bigCard__boxImg">
          <img
            src="https://images.unsplash.com/photo-1683754014240-a88411e7eb2a?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Voici une illistration d'une carte Yu Gi Ho, présente dans le TCG."
            className="bigCard__img"
          />
        </div>
        <div className="bigCard__boxContent">
          <h3 className="sect__title sect__title--3 bigCard__title2">
            Dragon Blanc aux yeux bleux
          </h3>
          <ul className="bigCard__list">
            <li className="bigCard__el">
              <p className="sect__txt">light</p>
              <p className="sect__txt">light</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="bigCard__numBox">
        <button className="bigCard__btnNum">-</button>
        <p className="sect__txt bigCard__numCard">2</p>
        <button className="bigCard__btnNum">+</button>
      </div>
    </div>
  );
};

export default BigCard;
