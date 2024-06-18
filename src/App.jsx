import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './assets/components/NavCircle/Menu/Menu';
import Accueil from './assets/Pages/Accueil/Accueil';
import Login from './assets/Pages/Login/Login';
import Register from './assets/Pages/Register/Register';
import Footer from './assets/components/Footer/Footer';

const App = () => {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
