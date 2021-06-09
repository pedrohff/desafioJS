//yarn add react-router-dom

import React from "react";

import Login from "./Pages/Login/login";

// import { isAuthenticated } from "./auth";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
// browserrouter = versao do router para browser
// route = uma rota

import StoreProvider from "./components/store/provider";

import RoutesPrivate from "./components/Routes/Private/private"



// definir as rotas
const Routes = () => (
  <StoreProvider>
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route
          exact
          path="/dashboard"
          component={() => <h1>Segunda Página</h1>}
        />
        <Route
          exact
          path="/dashboard2"
          component={() => <h1>Terceira Página</h1>}
        />

        <RoutesPrivate path="/" component={() => <h1>home</h1>}/>

      </Switch>
    </BrowserRouter>
  </StoreProvider>
);
// Switch nao deixa mais de uma rota ser chamada ao mesmo tempo
// exact = garante que minha rota so seja chamada quando o usuario nao tenha mais nada alem da rota inicial ( if a rota for exatamente esta )

export default Routes;
