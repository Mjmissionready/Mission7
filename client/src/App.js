import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Property from "./pages/Property";
import Apt from "./pages/Apt";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property" element={<Property />} />
        <Route path="/apt" element={<Apt />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
