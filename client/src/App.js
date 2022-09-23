import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import Home from "./pages/Home";
import Property from "./pages/Property";
import List from "./otherPage/List";
import SearchResultsMain from "./pages/SearchResultsMain";

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property" element={<SearchResultsMain />} />
        <Route path="/property/listing" element={<List />} />
        <Route path="/property/listing/:id" element={<Property />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
