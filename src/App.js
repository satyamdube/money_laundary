import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './home';
import About from './about';
import HowWeWork from './how_we_work';
import OurPricing from './our_pricing';
import BookNow from './book_now';

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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
