import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./component/Home/home";

import "tachyons";
import FavoriteSongsPage from "./pages/favorites";
import SongsPage from "./pages/songs";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {/* <Route exact path="/" component={Home} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/songs" element={<SongsPage />} />
          <Route path="/favorites" element={<FavoriteSongsPage />}/>

          {/* <Route path="/contact" component={Contact} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
