import React, {useEffect, useRef} from "react"; // usar para o registerField

import {useField} from "@unform/core" // useField = conecta input com unform

export default function Input ({name, ...rest}) {
  const inputRef = useRef(null)
  const {fieldName, registerField, defaultValue} = useField(name);
  //fieldName = nome final do input
  //registerFild = Funcao que dispara assim q o componente for montado em tela 

  useEffect(()=> {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value"
    })
  }, [fieldName, registerField]);

  return(
    <input ref={inputRef} defaultValue={defaultValue} {... rest} />
  );
}