import './App.css';
import React from 'react';
import {Route, Switch} from 'react-router'


import ini from './inicial/inicial.js';
import p1 from './classe/classe.js';
import p2 from './city/city.js';
import p3 from './cgtitan/cgt.js'

export default function App() {
  return (
    <div>
      <main>
        <Switch>
          <Route exact path="/" component={ini}/>
          <Route path='/classe' component={p1}/>
          <Route path='/city' component={p2}/>
          <Route path='/cgtitan' component={p3}/>
        </Switch>
      </main>
    </div>
  )
}
