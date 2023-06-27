import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { Login } from './pages/login';

function App() {
  return (
    <div className="App">
    
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Router>
      
    </div>
  );
}

export default App;
