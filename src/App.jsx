import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import WeddingDetails from "./pages/WeddingDetails";
import RSVP from "./pages/RSVP";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about-us" element={<AboutUs />}></Route>
          <Route path="/wedding-details" element={<WeddingDetails />}></Route>
          <Route path="/rsvp" element={<RSVP />}></Route>
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
