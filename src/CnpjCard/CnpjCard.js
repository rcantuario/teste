import React from "react";
import "./LabelCard.css";

const LabelCard = props => {
  return (
    <div className="cnpjCard">
      <div className="text">
        <p>CNPJ/Empresa</p>
        <input type="tel" name="cnpj" />
      </div>
    </div>
  );
};

export default LabelCard;
