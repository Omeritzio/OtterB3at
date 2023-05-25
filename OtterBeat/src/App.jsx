import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./index.css";
import "tachyons";

import FavoriteSongsPage from "./pages/favorites";
import SongsPage from "./pages/songs";
import Header from "./component/navbar/header";
import HomePage from "./pages/home";

function App() {
  return (
    <div >
      <Header />
      <Router>
        <Routes>
          {/* <Route exact path="/" component={Home} /> */}
          <Route path="/" element={<HomePage />} />
          <Route path="/songs" element={<SongsPage />} />
          <Route path="/favorites" element={<FavoriteSongsPage />} />

          {/* <Route path="/contact" component={Contact} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
