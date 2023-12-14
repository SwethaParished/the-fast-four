
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from './layout/Navbar';
import NavbarBS from './layout/NavbarBS';
import Home from './pages/Home';
import AddUser from './users/AddUser';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavbarBS />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/adduser" element={<AddUser />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
