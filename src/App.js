import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { States } from './pages/Context';
import Header from './pages/components/Header/index';
import Modal from './pages/components/Modal/index';
import Home from './pages/Home/index';
import Destination from './pages/Destination/index';
import Crew from './pages/Crew/index';
import Technology from './pages/Technology/index';

const App = () => {

  return (

    <States>

      <Router>

        <Header />
        <Modal />

        <Routes>

          <Route path="/space-tourism/" element={<Home />} />
          <Route path="/space-tourism/Destination" element={<Destination />} />
          <Route path="/space-tourism/Crew" element={<Crew />} />
          <Route path="/space-tourism/Technology" element={<Technology />} />

        </Routes>

      </Router>

    </States>

  )

}

export default App;