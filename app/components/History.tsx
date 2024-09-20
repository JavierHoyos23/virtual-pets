import React from "react";

const History = () => {
  const dogs = [
    {
      name: "Toby",
      image: "/images/toby.webp",
      story: "Once a lonely stray, Toby wandered the streets searching for food and shelter. His resilience and spirit captured the hearts of those who met him, and now he inspires everyone with his journey to find a loving home."
    },
    {
      name: "Canela",
      image: "/images/canela.webp",
      story: "Canela was found shivering in the cold, but her joyful spirit never faded. After being rescued, she quickly became a beloved member of her new family."
    },
    {
      name: "Milo",
      image: "/images/milo.webp",
      story: "Milo was abandoned but never lost hope. His playful nature and loving heart won over everyone he met, and he now enjoys a happy life with his new family."
    }
  ];

  return (
    <section className="history bg-white p-6 m-3 rounded-lg shadow-md">
      <h2 className="text-3xl mb-6 font-semibold text-pink-600 text-left">History</h2>
      {dogs.map((dog, index) => (
        <div key={index} className="stories flex gap-4 items-center mb-6">
          <img src={dog.image} alt={dog.name} className="w-32 h-32 object-cover rounded-lg shadow-md" />
          <div className="story bg-gray-200 p-4 rounded-lg flex-1">
            <h3 className="text-xl font-semibold text-pink-700 mb-2">{dog.name}'s Story</h3>
            <p className="text-gray-700">{dog.story}</p>
            <button className="learn-more bg-pink-300 p-2 mt-2 rounded-lg transition-colors hover:bg-pink-400 font-semibold">
              Learn more about {dog.name}
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default History;


