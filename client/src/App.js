import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import SearchResultsNav from "./components/SearchResultsNav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import List from "./pages/List";
import Apt from "./pages/Apt";
//import SearchResults from "./components/SearchResults";
//import SearchProperty from "./components/SearchProperty";

function App() {
  return (
    <BrowserRouter>
      <SearchResultsNav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
        <Route path="/apt" element={<Apt />} />
      </Routes>
      <Footer />
      
    </BrowserRouter>
  );
}

export default App;

