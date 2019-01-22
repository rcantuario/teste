import React, { Component } from "react";
import "./App.css";
import Button from "./Button/Button";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Cotação de seguros</h1>
        <h4> Solução inovadora da líder de mercado</h4>
        <Button text="Iniciar" />
      </div>
    );
  }
}

export default App;
