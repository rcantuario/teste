import React, { Component } from "react";
import "./Cotacao.css";
import Button from "./Button/Button";
import AvatarCard from "./Card/AvatarCard";
import LabelCard from "./LabelCard/LabelCard";
import CnpjCard from "./CnpjCard/CnpjCard";
import axios from "axios";

class Cotacao extends Component {
  loadCotacao(cnpj) {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
      const persons = res.data;
      this.setState({ persons });
    });
  }

  render() {
    return (
      <div className="cotacao">
        <AvatarCard label="Nova cotação" value="#0980" />
        <LabelCard label="Buscar por CNPJ ou empresa" />
        <CnpjCard />
        <div className="bottom">
          <Button text="OK" onClick={this.loadCotacao} color="cadetblue" />
        </div>
      </div>
    );
  }
}

export default Cotacao;
