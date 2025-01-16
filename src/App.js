import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import './App.css';
import Home from './home';
import About from './about';
import HowWeWork from './how_we_work';
import OurPricing from './our_pricing';
import BookNow from './book_now';
import Contact from './contact';
import Cleaning from './cleaning';
import StreamIron from './steam_iron';
import Spotting from './spotting';
import Shoe from './shoe';
import Alterations from './alterations';
import OurServices from './our_services';
import Login from "./login";
import Dashboard from "./dashboard";
import ContactGet from "./contact_get";
import Terms from "./terms";
import Privacy from "./privacy";
import SuccessPage from "./success";


function App() {
  const isAuthenticated = !!localStorage.getItem("authToken");
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/how_we_work" element={<HowWeWork />} />
          <Route path="/our_pricing" element={<OurPricing />} />
          <Route path="/book_now" element={<BookNow />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/cleaning" element={<Cleaning/>} />
          <Route path="/steam_iron" element={<StreamIron/>} />
          <Route path="/spotting" element={<Spotting/>} />
          <Route path="/shoe" element={<Shoe/>} />
          <Route path="/alterations" element={<Alterations/>} />
          <Route path="/our_services" element={<OurServices/>} />
          <Route path="/contact_list" element={<ContactGet/>} />
          <Route path="/terms" element={<Terms/>} />
          <Route path="/privacy" element={<Privacy/>} />
          <Route path="/success" element={<SuccessPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
