import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home, Login, Detail, Catalogo } from "./Views/Index";


function App() {
  return (
      <Routes>
       
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route pa th="/detail" element={<Detail />} />
        <Route path="/catalogo" element={<Catalogo />} />
      </Routes>
  );
}

export default App;
