import React from "react";
import Header from "./cityHeader.js";
import Titulo from "../Titulo/titulo.js";

//import {Route, Switch} from "react-router-dom"
//import App from "../App.js";

export default function p2() {
  return (
      <div>
        <div>
          <Header />
        </div>
        <div>
          <Titulo texto="Modelo da Moto"/>
        </div>
      </div>
  )
}