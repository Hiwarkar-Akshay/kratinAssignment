import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import LoginPage from './LoginPage';
import About from './About';
import SignUp from './Signup';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' exact element={<LoginPage />} />
          <Route path='/home' exact element={<Home />} />
          <Route path='/about' exact element={<About />} />
          <Route path='/signup' exact element={<SignUp/>} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
