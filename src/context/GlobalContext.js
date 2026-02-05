import { Children, createContext, useReducer } from "react";

/* creation du global context : mini store/mini redux */
const initialState = {
  watchList: [],
  watched: [],
};

export const GlobalContext = createContext(initialState);

/* on sait que pour utiliser le context
   on a besoin d'un composant provider
   tous les childrens au sein de ce provider
   peuvent acceder au global context
*/

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <GlobalContext.Provider
      value={{
        watchList: state.watchList,
        watched: state.watched,
      }}
    >
      {children}
      {/* les composants qui vont beneficier de context grace au provider

       */}
    </GlobalContext.Provider>
  );
};

export default ContextProvider;
