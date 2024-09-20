'use client';

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faPlus, faUser, faCog } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./Sidebar";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative">
      {/* Header */}
      <header className="flex justify-between items-center p-4 bg-pink-100 shadow-md">
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleSidebar}
            className="p-2 text-xl text-pink-600 hover:text-pink-700 transition duration-300"
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>

        <h1 className="text-3xl font-bold tracking-wide text-pink-700">VirtualPets</h1>

        <div className="flex items-center space-x-4">
          <button className="p-2 text-xl text-pink-600 hover:text-pink-700 transition duration-300">
            <FontAwesomeIcon icon={faCog} />
          </button>
        </div>
      </header>

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      
    </div>
  );
};


export default Header;


