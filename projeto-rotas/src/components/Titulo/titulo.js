import React from "react";
import './titulo.css'

export default function Titulo(props){
    return(

        <div className="titulo">
            <div className="conteudo">
                <h2><em> {props.texto} </em></h2>
            </div>
        </div>
    )
}