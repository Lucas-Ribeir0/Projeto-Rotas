import React from "react";
//import {Route, Switch} from 'react-router'
import { Link } from "react-router-dom";
import './cgt.css'

export default function Header() {
  return (
    <header>
    <div className="header">
        <nav>
            <ul>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/city">VOLTAR</Link></li>
                <li><Link to="/">PAINEL</Link></li>
                <li><Link to ="/">TANQUE</Link></li>
                <li><Link to ="/">CARENAGEM</Link></li>
                <li><Link to ="/">RODAS</Link></li>
                <li><Link to ="/">FREIOS</Link></li>
            </ul>
        </nav>
      </div>
    </header>

  )
}

