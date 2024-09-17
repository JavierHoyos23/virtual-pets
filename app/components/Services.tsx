import React from "react";

const Services = () => {
  const services = ["Service 1", "Service 2", "Service 3", "Service 4", "Service 5"];
  
  return (
    <section className="services bg-white p-6 m-6 rounded-lg">
      <h2 className="text-2xl mb-4">Services</h2>
      <div className="service-list flex gap-4">
        {services.map((service) => (
          <div key={service} className="service bg-gray-200 p-4 rounded-lg text-center w-24 h-24 flex items-center justify-center">
            {service}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
