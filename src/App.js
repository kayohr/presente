import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Galeria from './pages/Galeria';
import Noite from './pages/Noite';
import Dia from './pages/Dia';


function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/galeria" component={ Galeria } />
      <Route exact path="/noite" component={ Noite } />
      <Route exact path="/dia" component={ Dia } />

    </Switch>
  );
}

export default App;
