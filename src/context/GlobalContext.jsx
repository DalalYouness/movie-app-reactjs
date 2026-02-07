import { createContext } from "react";

/* creation du global context : mini store/mini redux */
export const initialState = {
  watchList: [],
  watched: [],
};

export const GlobalContext = createContext(initialState);

/* on sait que pour utiliser le context
   on a besoin d'un composant provider
   tous les childrens au sein de ce provider
   peuvent acceder au global context
*/
