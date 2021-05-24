import React from 'react';

import Input from "./components/Form/input"

import {isAuthenticated} from "./auth"

import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
// browserrouter = versao do router para browser
// route = uma rota 


const PrivateRoute = ({component: Component, ... rest}) => (
  <Route {...rest} render = {props =>(
    isAuthenticated () ? (  // se o usuário esta conectado ...
      <Component {...props} />
    ) : (
      <Redirect to = {{pathname: '/', state: { from : props.location}}} />
    )
  )}/>
)

// definir as rotas 
const Routes = () => (
  <BrowserRouter>
    <Switch> 
      <Route  exact path="/" component = {Input} />
      <Route  exact path="/dashboard" component = {() =><h1>Segunda Página</h1>} />
      <Route  exact path="/dashboard2" component = {() =><h1>Terceira Página</h1>} />
      <PrivateRoute path = "/app" component ={() => <h1>Você está logado</h1>} />
    </Switch>
  </BrowserRouter>
);
// Switch nao deixa mais de uma rota ser chamada ao mesmo tempo 
// exact = garante que minha rota so seja chamada quando o usuario nao tenha mais nada alem da rota inicial ( if a rota for exatamente esta )

export default Routes;