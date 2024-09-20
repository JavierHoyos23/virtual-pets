import React from "react";

const RecentPurchases = () => {
    const purchases = [
        { id: 1, service: "Walk", dog: "Luna", date: "2024-09-18", cost: 0.5, transactionDate: "2024-09-17" },
        { id: 2, service: "Bath", dog: "Max", date: "2024-09-17", cost: 0.25, transactionDate: "2024-09-16" },
        { id: 3, service: "Day Care", dog: "Max", date: "2024-09-15", cost: 0.75, transactionDate: "2024-09-14" },
    ];      

  return (
    <section className="recent-purchases p-6 m-3 rounded-lg bg-white shadow-md">
      <h2 className="text-3xl mb-6 font-semibold text-pink-600">Recent Purchases</h2>

      <div className="purchases-list">
        <ul className="list-none pl-5">
          {purchases.map((purchase) => (
            <li key={purchase.id} className="flex justify-between text-gray-700 mb-2">
              <div>
                <span>{purchase.service} for {purchase.dog}</span>
                <div className="text-gray-500 text-sm">
                    Transaction: {purchase.transactionDate} <br /> Service given: {purchase.date}
                </div>
              </div>
              <span className="font-bold">{purchase.cost} SOL</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default RecentPurchases;

