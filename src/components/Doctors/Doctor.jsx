import React from "react";
import { FaRegRegistered } from "react-icons/fa6";
import { useNavigate } from "react-router";

const Doctor = ({ doctor }) => {
  const { image, name, education, speciality, experience, registration, availability } = doctor;

  // Get today's day name
  const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const today = weekday[new Date().getDay()];
  // Check if doctor is available today
  const isAvailableToday = availability.includes(today);
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-2xl shadow-md p-4">
      {/* Doctor Image */}
      <div>
        <img src={image} alt={name} className="rounded-xl w-full h-48 md:h-56 lg:h-64 object-cover object-top" />
      </div>
      {/* Doctor availability and Details */}
      <div className="flex flex-wrap gap-2 mt-4">
        <span
          className={`text-xs font-semibold px-3 py-1 rounded-full ${
            isAvailableToday
              ? "bg-green-100 border text-green-600"
              : "bg-red-100 border text-red-600"
          }`}>
          {isAvailableToday ? "Available" : "Unavailable"}
        </span>
        <span className="bg-blue-100 border text-blue-600 text-xs font-semibold px-3 py-1 rounded-full">
          {experience}+ Years Experience
        </span>
      </div>

      <div className="mt-4 space-y-1 text-left">
        <h2 className="text-xl font-bold text-gray-800">{name}</h2>
        <p className="text-base text-gray-600">{education}</p>
        <p className="text-sm text-gray-500">{speciality}</p>
        <hr className="my-3 border-2 border-dashed border-gray-200" />
        <p className="text-sm text-gray-400 flex place-items-center gap-2">
          <FaRegRegistered /> Reg No: {registration}
        </p>
      </div>
      {/* View Details Button */}
      <div className="mt-4 text-center">
        <button className="bg-white hover:bg-gray-100 text-blue-600 border-2 border-blue-600 font-semibold py-2 w-full rounded-full cursor-pointer"
        onClick={() => navigate(`/doctor-info/${doctor.id}`)}>
          View Details
        </button>
      </div>
    </div>
  );
};

export default Doctor;