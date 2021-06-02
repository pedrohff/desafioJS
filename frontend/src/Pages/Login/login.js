import React, {useRef} from 'react';

import  {Form} from "@unform/web"; 
import Input from "../../components/Form/input";
import {Scope} from "@unform/core"; // define um scopo por volta de elementos em comum 

//iniciando o dado com algum tipo de dado(vindo do backend por exemplo)
const initialData = {
  email: "sergio@vsdi.com.br", // dados iniciais
  address: {
    city: "João Pessoa",
  }
}

// const user = {
//   name: "Sérgio",
//   address:{
//     street: "Rua teste",
//     number: 123,
//   }
// }

export default function Login (){
  const formRef = useRef(null);

  function handSubmit(data){ // recebe dados 
    if(data.name === ""|| data.address.city===  ""){
      // formRef.current.setFieldError("name", "O nome é obrigatório"); para um só erro 
      formRef.current.setErrors({ // usar para notificar varios erros 
        name: "O nome é obrigatório",
        address:{
          city: "A cidade é obrigatória",
        }
      })
    }
    console.log(data);//imprime na tela 
  }
  return(

    <Form ref={formRef} initialData={initialData} onSubmit={handSubmit} > 
    <Input name="name" /> 
    <Input type="email" name="email" />

    <Scope path="address"> 
      <Input name = "street"/>
      <Input name = "neighborhood"/>
      <Input name = "city"/>
      <Input name = "state"/>
      <Input name = "number"/>
    </Scope>

    <Input type="password" name="password" />
    <button type="submit">Enviar</button>
    </Form>
  )
  }
  
