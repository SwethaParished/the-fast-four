
import './App.css';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from './layout/Navbar';
import NavbarBS from './layout/NavbarBS';
import Home from './pages/Home';
import AddUser from './users/AddUser';
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import NavbarForHome from './layout/NavbarForHome';
import Corousal from './layout/Corousal';
import CreateHike from './components/CreateHike';
import EditUser from './users/EditUser';
import React from 'react';
<<<<<<< HEAD
import LogIn from './pages/LogIn';
=======
import ViewUser from './users/ViewUser';
>>>>>>> 3e5e2c718fa0e715f2465cb3bc0c3a72a64996f2

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <NavbarBS />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/adduser" element={<AddUser />} />
<<<<<<< HEAD
          <Route exact path="/edituser" element={<EditUser />} />
          <Route exact path="/login" element={<LogIn />} />
=======
          <Route exact path="/edituser/:id" element={<EditUser />} />
          <Route exact path="/viewuser/:id" element={<ViewUser />} />
>>>>>>> 3e5e2c718fa0e715f2465cb3bc0c3a72a64996f2
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
