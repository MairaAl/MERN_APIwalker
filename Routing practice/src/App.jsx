import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Number from "./Number";
import Word from "./Word";
import StyledWord from "./StyledWord";
function App() {
  return (
    <BrowserRouter>
      <ul>
        <li>
          <Link to="/">Ir a la página de inicio</Link>
        </li>
        <li>
          <Link to="/4">Mostrar el número 4</Link>
        </li>
        <li>
          <Link to="/hello">Mostrar la palabra hello</Link>
        </li>
        <li>
          <Link to="/hello/blue/red">Mostrar hello con estilos</Link>
        </li>
      </ul>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/:number" element={<Number />} />
        <Route path="/:hello" element={<Word />} />
        <Route path="/:hello/:textColor/:bgColor" element={<StyledWord />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
