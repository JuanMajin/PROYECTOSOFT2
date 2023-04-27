import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes,  } from 'react-router-dom'
import Library from '../library/index'
import Feed from '../feed/index'
import Trending from '../trending/index'
import Player from '../player/index'
import Favorites from '../favorites'
import "./home.css";
import Sidebar from '../../components/sidebar'
import { setClientToken } from "../../spotify";
import Login from '../auth/login'

export default function Home() {
  const [token, setToken] = useState("");

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const hash = window.location.hash;
    window.location.hash = "";
    if (!token && hash) {
      const _token = hash.split("&")[0].split("=")[1];
      window.localStorage.setItem("token", _token);
      setToken(_token);
      setClientToken(_token);
    } else {
      setToken(token);
      setClientToken(token);
    }
  }, []);
  return !token ? (
    <Login />
  ) : (
    <Router>
      <div className="main-body"> 
        <Sidebar />
        <Routes>
          <Route path="/library" element= {<Library />} />
          <Route path="/feed" element= {<Feed />} />
          <Route path="/trending" element= {<Trending />} />
          <Route path="/player" element= {<Player />} />
          <Route path="/favorites" element= {<Favorites />} />
        </Routes> 
      </div>
    </Router>
  );
}
