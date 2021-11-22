import React from 'react';
import './App.css';
import Home from './components/Home';
import { CraigslistScraper } from './components/CraigslistScraper';
import Navbar from './components/Navbar';
import {Route, Routes} from 'react-router-dom';
import { YRatio } from './components/yRatio';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/cScraper' element={<CraigslistScraper/>} />
        <Route exact path='/yRatio' element={<YRatio/>} />
      </Routes>
    </div>
  );
}

export default App;
