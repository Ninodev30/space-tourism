import React from "react";
import { States } from './assets/pages/Context';
import Header from './assets/pages/Header';
import Modal from './assets/pages/Modal';
import Home from './assets/pages/Home/Home';

const App = () => {

  return (

    <div className="App">

      <States>

        <Header/>
        <Modal/>

      </States>

      <Home></Home>

    </div>

  )

}

export default App;
