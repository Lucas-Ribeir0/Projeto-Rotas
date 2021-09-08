import React from "react";
//import {Route, Switch} from 'react-router'
import { Link } from "react-router-dom";
import './cityHeader.css'

export default function Header() {
  return (
    <header>
    <div className="header">
        <nav>
            <ul>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/classe">VOLTAR</Link></li>
                <li><Link to="/">POP</Link></li>
                <li><Link to ="/">BIZ</Link></li>
                <li><Link to ="/">CG FAN</Link></li>
                <li><Link to ="/cgtitan">CG TITAN</Link></li>
            </ul>
        </nav>
      </div>
    </header>

  )
}

