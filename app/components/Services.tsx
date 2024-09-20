import React from "react";

const Services = () => {
  const services = [
    {
      name: "Walk",
      description: "A fun and healthy walk for your dog.",
      cost: 0.5,
      image: "/images/walk.webp",
    },
    {
      name: "Bath",
      description: "A refreshing bath to keep your dog clean.",
      cost: 0.25,
      image: "/images/bath.webp",
    },
    {
      name: "Day Care",
      description: "Safe and enjoyable daycare for your dog.",
      cost: 0.75,
      image: "/images/daycare.webp",
    },
  ];

  return (
    <section className="services bg-white p-6 m-3 rounded-lg shadow-md">
      <h2 className="text-3xl mb-6 font-semibold text-pink-600 text-left">Services</h2>
      <div className="service-list flex gap-4 overflow-x-auto">
        {services.map((service) => (
          <div key={service.name} className="service bg-gray-200 p-4 rounded-lg text-center w-64 flex-shrink-0">
            <img src={service.image} alt={service.name} className="w-full h-32 object-cover rounded-lg mb-2" />
            <h3 className="text-xl font-semibold text-pink-700">{service.name}</h3>
            <p className="text-gray-600">{service.description}</p>
            <span className="font-bold text-pink-600">${service.cost.toFixed(2)}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
