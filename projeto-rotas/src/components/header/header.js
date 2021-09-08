import React from "react";
import { Link } from 'react-router-dom';
import './header.css';

export default function Header() {
  return (

    <div className="header">
        <nav>
            <ul>
                <li className="HRL"><Link to="/">HARLEY</Link></li>
                <li className="SZK"><Link to ="/">SUZUKI</Link></li>
                <li className="HND"><Link to = "/classe">HONDA</Link></li>
                <li className="YMH"><Link to ="/">YAMAHA</Link></li>
                <li className="LBT"><Link to ="/">LAMBRETA</Link></li>
            </ul>
        </nav>
    </div>

  )
}


