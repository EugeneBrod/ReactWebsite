import React from 'react';
import './App.css';
import Home from './components/Home';
import { CraigslistScraper } from './components/CraigslistScraper';
import Navbar from './components/Navbar';
import {Route, Routes} from 'react-router-dom';
import { YRatio } from './components/yRatio';
import { SkaDice } from './components/SkaDice';
import { Horse } from './components/Horse';
import { HomeV2 } from './components/HomeV2';



function App() {
  return (
    <div className="App">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/cScraper' element={<CraigslistScraper/>} />
        <Route exact path='/YoutubeRatio' element={<YRatio/>} />
        <Route exact path='/SkaDice' element={<SkaDice/>} />
        <Route exact path='/Horse' element={<Horse/>} />
        <Route exact path='/HomeV2' element={<HomeV2/>} />
      </Routes>
    </div>
  );
}

export default App;
