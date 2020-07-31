import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom'; // Tem a função de não recarregar a página
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video'


function Pagina404 (){
  return(
    <div>
      Página 404
    </div>
  )
}

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,

  document.getElementById('root')
);

