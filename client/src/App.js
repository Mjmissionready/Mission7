import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import List from "./pages/List";
import Apt from "./pages/Apt";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
        <Route path="/list/:id" element={<Apt />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
