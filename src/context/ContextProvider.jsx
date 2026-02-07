import { useReducer } from "react";
import reducer from "./reducer";
import { GlobalContext, initialState } from "./GlobalContext";

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
        moviesDispatch: dispatch, //dispatch providetha l context fhal minredux bach bnadem yqdr manha ysift l action li baghu ydir bach haka la methode reducer ghadi y executeha react
        //mnin ghada t executa ghada trj3 state jdida react gha y3awd ydir re-render l provider ol provider ghay3wd
        //ysift values jdida l context o haka les composant li ghay7tajo l values jdida ghadin y accedew l provider
      }}
    >
      {children}
      {/* les composants qui vont beneficier de context grace au provider */}
    </GlobalContext.Provider>
  );
};

export default ContextProvider;
