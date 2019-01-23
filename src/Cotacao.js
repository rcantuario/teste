import React, { Component } from "react";
import "./Cotacao.css";
import Button from "./Button/Button";
import AvatarCard from "./Card/AvatarCard";
import LabelCard from "./LabelCard/LabelCard";

class Cotacao extends Component {
  render() {
    return (
      <div className="Cotacao">
        <AvatarCard label="Nova cotação" value="#0980" />
        <LabelCard label="Buscar por CNPJ ou empresa" />

        <Button text="OK" color="cadetblue" />
      </div>
    );
  }
}

export default Cotacao;
