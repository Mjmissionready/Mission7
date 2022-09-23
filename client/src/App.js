import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import Home from "./pages/Home";
import Property from "./pages/Property";
import Property1 from "./pages/Property1";
import List from "./otherPage/List";
import SearchResultsMain from "./Agnes/SearchResultsMain";

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property" element={<SearchResultsMain />} />
        <Route path="/property/listing" element={<List />} />
        <Route path="/property/listing/:id" element={<Property1 />} />
        <Route path="/property/list" element={<Property />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
