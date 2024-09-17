import React from "react";

const History = () => {
  return (
    <section className="history bg-white p-6 m-6 rounded-lg">
      <h2 className="text-2xl mb-4">History</h2>
      <div className="stories flex gap-4">
        <div className="story bg-gray-200 p-4 rounded-lg">
          <p>Toby's story</p>
          <button className="learn-more bg-pink-300 p-2 mt-2 rounded-lg">Learn more about Toby</button>
        </div>
        <div className="story bg-gray-200 p-4 rounded-lg">
          <p>Artist Title</p>
          <button className="play-button bg-pink-300 p-2 mt-2 rounded-lg">▶️</button>
        </div>
      </div>
    </section>
  );
};

export default History;
