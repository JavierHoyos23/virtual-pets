import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-pink-100">
      <div className="flex items-center">
        <button className="menu-button p-2 m-2 text-xl rounded-full bg-pink-300">
          &#9776;
        </button>
        <button className="add-button p-2 m-2 text-xl rounded-full bg-pink-300">
          +
        </button>
      </div>
      <h1 className="text-3xl font-bold">VirtualPets</h1>
      <div className="flex items-center">
        <button className="profile-icon text-3xl m-2">👤</button>
        <button className="settings-icon text-3xl m-2">⚙️</button>
      </div>
    </header>
  );
};

export default Header;
