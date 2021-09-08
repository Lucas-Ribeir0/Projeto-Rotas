import React from "react";
//import {Route, Switch} from 'react-router'
import { Link } from "react-router-dom";
import './classeHeader.css'

export default function Header() {
  return (
    <header>
    <div className="header">
        <nav>
            <ul>
                <li><Link to="/">VOLTAR</Link></li>
                <li><Link to="/city">CITY</Link></li>
                <li><Link to ="/">TRAIL</Link></li>
                <li><Link to ="/">OFF ROAD</Link></li>
                <li><Link to ="/">SPORT</Link></li>
                <li><Link to ="/">SCOOTER</Link></li>
            </ul>
        </nav>
      </div>
    </header>

  )
}

