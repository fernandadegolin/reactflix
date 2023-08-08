import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { BrowserRouter, Switch, Route } from "react-router-dom"; // Tem a função de não recarregar a página
import Home from "./pages/Home";
import Galeria from "./pages/Galeria";
import Informacao from "./pages/Info";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/galeria" component={Galeria} />
      <Route path="/info" component={Informacao} />
    </Switch>
  </BrowserRouter>,

  document.getElementById("root")
);
