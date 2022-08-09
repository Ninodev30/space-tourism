import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './assets/pages/Header';
import Modal from './assets/pages/Modal';
import Home from './assets/pages/Home/Home';
import Destination from './assets/pages/Destination/Destination';
import Crew from './assets/pages/Crew/Crew';
import Technology from './assets/pages/Technology/Technology';

const App = () => {

  return (

    <Router>

      <Header />
      <Modal />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/Destination" element={<Destination />} />
        <Route path="/Crew" element={<Crew />} />
        <Route path="/Technology" element={<Technology />} />

      </Routes>

    </Router>

  )

}

export default App;
