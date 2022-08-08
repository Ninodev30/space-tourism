import React, { useContext } from "react";
import { Context } from './assets/pages/Context';
import { Container } from "./assets/styles/GlobalStyles";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './assets/pages/Header';
import Modal from './assets/pages/Modal';
import Home from './assets/pages/Home/Home';
import Destination from './assets/pages/Destination/Destination';
import Crew from './assets/pages/Crew/Crew';
import Technology from './assets/pages/Technology/Technology';

const App = () => {

  const [modal, setModal, background, setBackground] = useContext(Context);

  const myApp = () => {

    return (

      <Router>

        <Header />
        <Modal />

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/Destination" element={<Destination />} />
          <Route path="/Crew" element={<h1>TESTANDO 2</h1>} />
          <Route path="/Technology" element={<h1>TESTANDO 3</h1>} />

        </Routes>

      </Router>

    )

  }

  if (background === 0) {
    return (
      <Container Size='Home'>
        {myApp()}
      </Container>
    )
  }
  else if (background === 1) {
    return (
      <Container Size='Destination'>
        {myApp()}
      </Container>
    )
  }
  else if (background === 2) {
    return (
      <Container Size='Crew'>
        {myApp()}
      </Container>
    )
  }
  else if (background === 3) {
    return (
      <Container Size='Technology'>
        {myApp()}
      </Container>
    )
  }

}

export default App;
