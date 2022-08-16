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

          <Route path="/" element={<Home />} />
          <Route path="/Destination" element={<Destination />} />
          <Route path="/Crew" element={<Crew />} />
          <Route path="/Technology" element={<Technology />} />
          <Route path="*" element={<h1 className="error">ERROR 404 NOT FOUND</h1>} />

        </Routes>

      </Router>

    </States>

  )

}

export default App;