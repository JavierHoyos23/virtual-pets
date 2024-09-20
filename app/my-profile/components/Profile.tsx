import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDog } from "@fortawesome/free-solid-svg-icons";

const Profile = () => {
  const userData = {
    name: "Herve",
    lastName: "Chan",
    email: "herve@gmail.com",
    profileId: "139827",
    birthDate: "1999-05-15",
    pets: ["Luna", "Max"],
    profileImage: "/images/herve.jpg"
  };

  return (
    <section className="profile p-6 m-3 rounded-lg bg-white shadow-md">
      <h2 className="text-3xl mb-6 font-semibold text-pink-600">My Profile</h2>
      
      <div className="flex items-center mb-6">
        <img 
          src={userData.profileImage} 
          alt={`${userData.name} ${userData.lastName}`} 
          className="w-32 h-32 object-cover rounded-full border-2 border-pink-600 mr-4" 
        />
        <div>
          <h3 className="text-xl font-bold text-pink-700">{userData.name} {userData.lastName}</h3>
          <p className="text-gray-600"><span className="font-semibold">Profile ID: </span>{userData.profileId}</p>
          <p className="text-gray-600"><span className="font-semibold">Email: </span>{userData.email}</p>
          <p className="text-gray-600"><span className="font-semibold">Date of Birth: </span><br className="sm:hidden"/>{userData.birthDate}</p>
        </div>
      </div>

      <div className="pets-info">
        <h4 className="text-2xl font-semibold text-pink-600 mb-4">My Adopted Pets</h4>
        <ul className="list-none pl-5">
          {userData.pets.map((pet, index) => (
            <li key={index} className="flex items-center text-gray-700 mb-2">
              <FontAwesomeIcon icon={faDog} className="text-pink-600 mr-2" />
              {pet}
            </li>
          ))}
        </ul>
      </div>

      <div className="additional-info mt-6">
        <h4 className="text-2xl font-semibold text-pink-600 mb-4">Additional Information</h4>
        <p className="text-gray-700">Thank you for adopting and caring for our furry friends!</p>
      </div>
    </section>
  );
};

export default Profile;

