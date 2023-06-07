import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Register from './routes/Register';
import Bmr from './routes/Bmr';
import Login from './routes/Login';

function App() {
  return (
    <Router>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Bmr" element={<Bmr />} />
    <Route path="/Register" element={<Register />} />
    <Route path="/Login" element={<Login />} />

 </Routes>
</Router>
  );
}

export default App;
