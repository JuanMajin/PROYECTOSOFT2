import React from 'react'
import { BrowserRouter as Router, Route, Routes,  } from 'react-router-dom'
import Library from '../library/index'
import Feed from '../feed/index'
import Trending from '../trending/index'
import Player from '../player/index'
import Favorites from '../favorites'
import "./home.css";
import Sidebar from '../../components/sidebar'

export default function Home() {
  return (
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
  )
}
