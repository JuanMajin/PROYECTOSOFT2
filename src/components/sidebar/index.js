import React from 'react'
import "./sidebar.css"
import SidebarButton from './sidebarButton'
import { MdDashboard, MdFavorite } from "react-icons/md"
import { FaGripfire, FaPlay } from "react-icons/fa"
import { FaSignOutAlt } from "react-icons/fa"
import { IoLibrary } from "react-icons/io5"
import { MdSpaceDashboard } from "react-icons/md"


export default function Sidebar() {
  return (
    <div className="sidebar-container">
      <img src="https://c8.alamy.com/zoomses/9/9c30002a90914b58b785a537a39421ba/2c80ydc.jpg" className="profile-img" alt="profile" />


      <div>
        <SidebarButton title="Feed" to="/feed" icon={<MdDashboard />} />
        <SidebarButton title="Trending" to="/trending" icon={<FaGripfire />}/>
        <SidebarButton title="Player" to="/player" icon={<FaPlay/>}/>
        <SidebarButton title="Favorites" to="/favorites" icon={<MdFavorite/>}/>
        <SidebarButton title="Library" to="/library" icon={<IoLibrary/>}/>
     </div>
     <SidebarButton title="Sig Out" to="" icon={<FaSignOutAlt/>}/>
    </div>
  )
}