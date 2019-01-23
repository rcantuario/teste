import React, { Component } from "react";
import "./App.css";
import Button from "./Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";

class App extends Component {
  render() {
    return (
      <div className="App">
        <FontAwesomeIcon icon={faChartLine} />
        <h1> Cotação de seguros</h1>
        <h6> Solução inovadora da líder de mercado</h6>
        <Button text="Iniciar" />
      </div>
    );
  }
}

export default App;
