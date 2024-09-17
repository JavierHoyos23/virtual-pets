import React from "react";

const AdoptMe = () => {
  const pets = ["Luna", "Max", "Rocky", "Canela", "Toby", "Bella", "Dulce", "Simba", "Lucky", "Milo"];
  
  return (
    <section className="adopt-me bg-white p-6 m-6 rounded-lg">
      <h2 className="text-2xl mb-4">Adopt me</h2>
      <div className="flex gap-4 overflow-x-auto">
        {pets.map((pet) => (
          <div key={pet} className="pet bg-gray-200 rounded-full p-4 w-20 h-20 text-center flex items-center justify-center">
            {pet}
          </div>
        ))}
      </div>
    </section>
  );
};

export default AdoptMe;
