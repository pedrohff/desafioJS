import React from 'react';
import "./login.css"

export default function Login(){
  return(
    <form action="/pagina-processa-dados-do-form" method="post">
    <div>
        <label for="nome">Nome:</label>
        <input type="text" id="nome" />
    </div>
    <div>
        <label for="email">E-mail:</label>
        <input type="email" id="email" />
    </div>
    <div>
        <label for="msg">Senha :</label>
        <textarea id="msg"></textarea>
    </div>
</form>
  )
};