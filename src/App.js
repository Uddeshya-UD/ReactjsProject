import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Register from './routes/Register';
import Bmr from './routes/Bmr';
import Login from './routes/Login';
import Contact from './routes/Contact';
import News from './routes/News';

function App() {
  return (
    <Router>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Contact" element={<Contact />} />
    <Route path="/Bmr" element={<Bmr />} />
    <Route path="/Register" element={<Register />} />
    <Route path="/Login" element={<Login />} />
    <Route path="/News" element={<News />} />



 </Routes>
</Router>
  );
}

export default App;
