import React from 'react';
import Navbar from './components/NavBar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OWeek from './components/pages/oweek/O-Week';
import Ateam from './components/pages/community/Ateam';
import Associatesalumni from './components/pages/community/Associatesalumni'
import Studentgov from './components/pages/community/Studentgov'
import BeerBikeTraditionsPage from "./components/pages/beerbike-traditions/BeerBikeTraditionsPage";
import PeerResources from './components/pages/resources/peer-resources/PeerResources';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/o-week' exact element={<OWeek />} />
          <Route path='/studentgov' exact element={<Studentgov />} />
          <Route path='/ateam' exact element={<Ateam />} />
          <Route path='/associates-alumni' exact element={<Associatesalumni />} />
          <Route path="/beerbike-traditions" exact element={<BeerBikeTraditionsPage />}/>
          <Route path='/resources' exact element={<PeerResources />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
