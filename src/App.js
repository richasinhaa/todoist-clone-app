import './App.css';
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import Navbar from "./components/Navbar";
import Inbox from "./pages/Inbox";
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Inbox/>} />
        <Route path="about" element={<About/>} />
        <Route path="contact" element={<Contact/>} />
      </Routes>
    </Router>
  );
}

export default App;