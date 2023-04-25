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
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/cScraper' element={<CraigslistScraper/>} />
        <Route exact path='/YoutubeRatio' element={<YRatio/>} />
      </Routes>
    </div>
  );
}

export default App;
