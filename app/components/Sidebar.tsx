'use client';

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faPaw, faShop, faUser, faWallet } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <aside
      className={`fixed top-0 left-0 h-screen w-64 bg-pink-100 p-6 shadow-lg transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <button
        className="mb-4 text-pink-700 text-2xl"
        onClick={toggleSidebar}
      >
        &#10005;
      </button>
      <h2 className="text-2xl font-bold text-pink-600 mb-8">VirtualPets</h2>
      <nav className="flex flex-col space-y-6">
        <Link href="/" className="flex items-center text-pink-700 hover:text-pink-900 transition duration-300">
          <FontAwesomeIcon icon={faHome} className="mr-3" />
          <span className="font-medium">Home</span>
        </Link>
        <Link href="/my-dogs" className="flex items-center text-pink-700 hover:text-pink-900 transition duration-300">
          <FontAwesomeIcon icon={faPaw} className="mr-3" />
          <span className="font-medium">My dogs</span>
        </Link>
        <Link href="#" className="flex items-center text-pink-700 hover:text-pink-900 transition duration-300">
          <FontAwesomeIcon icon={faShop} className="mr-3" />
          <span className="font-medium">Dog store</span>
        </Link>
        <Link href="my-wallet" className="flex items-center text-pink-700 hover:text-pink-900 transition duration-300">
          <FontAwesomeIcon icon={faWallet} className="mr-3" />
          <span className="font-medium">Wallet</span>
        </Link>
        <Link href="/my-profile" className="flex items-center text-pink-700 hover:text-pink-900 transition duration-300">
          <FontAwesomeIcon icon={faUser} className="mr-3" />
          <span className="font-medium">My Profile</span>
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
