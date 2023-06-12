import React, { useState, useEffect } from "react";
import "./sidebar.css"
import SidebarButton from './sidebarButton'
import { MdDashboard, MdFavorite } from "react-icons/md"
import { FaGripfire, FaPlay } from "react-icons/fa"
import { FaSignOutAlt } from "react-icons/fa"
import { IoLibrary } from "react-icons/io5"
// import { MdSpaceDashboard } from "react-icons/md"
import apiClient from "../../spotify";

export default function Sidebar() {
  const [image, setImage] = useState(
    "https://c8.alamy.com/zoomses/9/9c30002a90914b58b785a537a39421ba/2c80ydc.jpg"
  );
  useEffect(() => {
    apiClient.get("me").then((response) => {
      setImage(response.data.images[0].url);
    });
  }, []);

  return (
    <div className="sidebar-container">
      <img src={image} className="profile-img" alt="profile" />


      <div>
        <SidebarButton title="Feed" to="/feed" icon={<MdDashboard />} />
        <SidebarButton title="Trending" to="/trending" icon={<FaGripfire />}/>
        <SidebarButton title="Player" to="/player" icon={<FaPlay/>}/>
        <SidebarButton title="Favorites" to="/favorites" icon={<MdFavorite/>}/>
        <SidebarButton title="Library" to="/library" icon={<IoLibrary/>}/>
     </div>
     <SidebarButton title="Sign Out" to="" icon={<FaSignOutAlt/>}/>
    </div>
  )
}