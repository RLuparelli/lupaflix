import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Pages/Home/index.js';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import CadastroVideo from './Pages/Cadastro/Videos';
import CadastroCategoria from './Pages/Cadastro/Categoria';


const E404 =() => (<div>Por Favor Confira o endereco digitado!</div>)
ReactDOM.render(
   
  <BrowserRouter>
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/cadastro/categoria" exact component={CadastroCategoria} /> 
    <Route path="/cadastro/video" exact component={CadastroVideo} />
    <Route component={E404} />
  </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

