import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-solid-svg-icons";

const dogsData = [
    {
      name: "Luna",
      image: "/images/luna.webp",
      lastBath: "2 days ago",
      lastMeal: "4 hours ago",
      lastWalk: "1 hour ago",
      healthStatus: "Healthy",
    },
    {
      name: "Max",
      image: "/images/max.webp",
      lastBath: "5 days ago",
      lastMeal: "2 hours ago",
      lastWalk: "30 minutes ago",
      healthStatus: "Needs check-up",
    },  
];

const Dogs = () => {
  return (
    <section className="dogs bg-white p-6 m-3 rounded-lg shadow-md">
      <h2 className="text-3xl mb-6 font-semibold text-pink-600 text-left">My dogs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dogsData.map((dog) => (
          <div key={dog.name} className="dog-card bg-pink-100 p-4 rounded-lg shadow-md">
            <img src={dog.image} alt={dog.name} className="w-full h-40 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-bold text-pink-700 mb-2">{dog.name}</h3>
            <ul className="text-gray-600">
              <li><strong>Last bath:</strong> {dog.lastBath}</li>
              <li><strong>Last meal:</strong> {dog.lastMeal}</li>
              <li><strong>Last walk:</strong> {dog.lastWalk}</li>
              <li><strong>Health status:</strong> <span className={`font-semibold ${dog.healthStatus === 'Healthy' ? 'text-green-600' : 'text-red-600'}`}>{dog.healthStatus}</span></li>
              <li className="text-right pr-2"><FontAwesomeIcon icon={faMessage} /></li>
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Dogs;

