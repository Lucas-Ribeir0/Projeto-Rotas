import React from "react";
import Header from "./classeHeader.js";
import Titulo from "../Titulo/titulo.js";
//import {Route, Switch} from "react-router-dom"
//import App from "../App.js";

export default function p1() {
  return (
      <div>
        <div>
          <Header />
        </div>
        <div class="HND">
          <Titulo texto="Classe da Moto"/>
        </div>
      </div>

  )
}