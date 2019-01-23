import React from "react";
import "./CnpjCard.css";

const CnpjCard = props => {
  return (
    <div className="cnpjCard">
      <div className="text">
        <label>CNPJ/Empresa</label>
        <input type="tel" name="cnpj" />
      </div>
    </div>
  );
};

export default CnpjCard;
