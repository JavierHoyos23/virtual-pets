import React from "react";

const AdoptMe = () => {
  const pets = ["Rocky", "Canela", "Toby", "Bella", "Dulce", "Simba", "Lucky", "Milo"];

  return (
    <section className="adopt-me p-6 m-3 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl mb-6 font-semibold text-pink-600 text-left">Adopt Me</h2>
      <div className="flex gap-4 overflow-x-auto scrollbar-hide p-2">
        {pets.map((pet) => (
          <div key={pet} className="pet bg-gray-200 rounded-full p-4 w-24 h-24 text-center flex items-center justify-center hover:bg-pink-300 transition-all duration-300 ease-in-out">
            <span className="text-pink-700 font-semibold">{pet}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AdoptMe;

