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
        <Route exact path="/" component={<Home />} />
        <Route path="/:number" component={<Number />} />
        <Route path="/:hello" component={<Word />} />
        <Route path="/:hello/:text/:color" component={<StyledWord />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
