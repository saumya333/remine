import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router,   Routes, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Contacts from './components/pages/Contacts';
import SignUp from './components/pages/SignUp';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
        <Route path='/' exact element={<Home/>} />
          <Route path='/services' element={<Services/>} />
          <Route path='/contacts' element={<Contacts/>} />
          <Route path='/sign-up' element={<SignUp/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;