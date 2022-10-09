import React from 'react';
import './App.scss';
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
/* import { songsdata } from './component/APImusic'; */
import PlayMusic from './views/playmusic';
import Sidebar from './views/sidebar';
import Canhan from './router/canhan';
import Khampha from './router/khampha';
import Zingchart from './router/zingchart';
import Radio from './router/radio';
import Theodoi from './router/theodoi';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <PlayMusic />
        <Routes>
          <Route exact path='/' element={<Canhan />} />
          <Route path='/khampha' element={<Khampha />} />
          <Route path='/zingchart' element={<Zingchart />} />
          <Route path='/radio' element={<Radio />} />
          <Route path='/theodoi' element={<Theodoi />} />
        </Routes>
        <Sidebar />
      </BrowserRouter>
    </div >
  );
}

export default App;
