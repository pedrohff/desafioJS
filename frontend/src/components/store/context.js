import {createContext} from 'react';

const StoreContext = createContext({ // setToken inicia assim por default
  token: null,
  setToken: () => {},
})

export default StoreContext;