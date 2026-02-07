import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const useMovies = () => {
  return useContext(GlobalContext); //comme ca maghan7tajch anaho kola mera nbqa ndir useContext kans7yb customHook
};

export default useMovies;
