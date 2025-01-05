import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
