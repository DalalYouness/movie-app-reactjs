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
  /* db le context provider howa li fih state donc howa li finma ghada tbdl state ghadi y tre-rendre
    donc howa khaso yprovider l context ghadi y provideh b data o ghadi yprovideh
    hta bl methode dispatch ce qui est logique hit 7na useReducer katrad lina dispatch
    donc hiya ka reference kayna , ga3 l components li ghadin ybghi ybdlo f state ghayhtajo ysifto l action
    object b dispatch li kayna fl context , o 7na deja msaybin reducer homa kaysifto l action f dispatch react
    kay passer les donné l reducer o kansrj3o state jdida fiha ghir dkchi li tchangea hna react kaydir comparaison
    katban lih state li rj3at different ela li edna sf kaydir re-render o kay provider state jdida
  */
  return (
    <GlobalContext.Provider
      value={{
        watchList: state.watchList,
        watched: state.watched,
        moviesDispatch: dispatch,
      }}
    >
      {children}
      {/* les composants qui vont beneficier de context grace au provider */}
    </GlobalContext.Provider>
  );
};

export default ContextProvider;
