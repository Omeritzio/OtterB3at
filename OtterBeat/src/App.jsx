import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './component/Home/home';
import ListOfSongs from './component/Card/listofsongs';
import 'tachyons'

function App ()  {
  
  return (
    <div>
      <Router>
      <Routes>
        {/* <Route exact path="/" component={Home} /> */}
        <Route path="/" element={<Home/>} />
        <Route path="/songs" element={<ListOfSongs/>} />
        {/* <Route path="/contact" component={Contact} /> */}
       
    </Routes>
    </Router>
      
    </div>
  );
};

export default App;
