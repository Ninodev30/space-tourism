import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './assets/pages/components/Header/index';
import Modal from './assets/pages/components/Modal/index';
import Home from './assets/pages/Home/index';
import Destination from './assets/pages/Destination/index';
import Crew from './assets/pages/Crew/index';
import Technology from './assets/pages/Technology/index';

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
