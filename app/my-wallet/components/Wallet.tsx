import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet } from "@fortawesome/free-solid-svg-icons";

const Wallet = () => {
  const walletData = {
    balance: 1.25,
    transactions: [
      { id: 1, amount: 0.5, type: "Deposit", date: "2024-09-15" },
      { id: 2, amount: 0.75, type: "Withdraw", date: "2024-09-12" },
      { id: 3, amount: 0.25, type: "Deposit", date: "2024-09-10" },
    ],
  };

  return (
    <section className="wallet p-6 m-3 rounded-lg bg-white shadow-md">
      <h2 className="text-3xl mb-6 font-semibold text-pink-600 flex items-center">
        {/* <FontAwesomeIcon icon={faWallet} className="mr-2" /> */}
        My Wallet
      </h2>

      <div className="balance mb-6">
        <h3 className="text-2xl font-bold text-pink-700">Balance: {walletData.balance} SOL</h3>
      </div>

      <div className="transactions">
        <h4 className="text-2xl font-semibold text-pink-600 mb-4">Recent Transactions</h4>
        <ul className="list-none pl-5">
          {walletData.transactions.map((transaction) => (
            <li key={transaction.id} className="flex justify-between text-gray-700 mb-2">
              <span>{transaction.type}: {transaction.amount} SOL</span>
              <span>{transaction.date}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Wallet;
