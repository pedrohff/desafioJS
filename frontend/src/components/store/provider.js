import React from 'react';
import Context from './context';
import useStorage from '../../utils/useStorange';

const StoreProvider = ({children}) => { //  retorna token e set token 
  const [token, setToken] = useStorage('token')

  return(
    <Context.Provider
      value={{
        token,
        setToken,
      }}
      >
        {children}

    </Context.Provider>
  )
}

export default StoreProvider