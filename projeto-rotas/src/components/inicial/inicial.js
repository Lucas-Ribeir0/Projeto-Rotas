import React from 'react';

import Header from '../header/header.js'
import Titulo from '../Titulo/titulo.js';

export default function inicio() {
  return (
    <div>
      <div>
        <header>
          <Header />
        </header>
      </div>
      <div>
        <Titulo texto="Seleção Principal"/>
      </div>
    </div>
  )
}
