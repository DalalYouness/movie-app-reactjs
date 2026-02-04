import { BrowserRouter, Route, Routes } from "react-router";
import Header from "../src/components/Header";
import Add from "../src/components/Add";
import WatchList from "./components/WatchList";
import Watched from "./components/Watched";
function App() {
  return (
    <BrowserRouter>
      {/* on peut creer une layout est on utilise le outlet */}
      <Header />
      <Routes>
        <Route path="/" element={<WatchList />} />
        <Route path="/watched" element={<Watched />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
