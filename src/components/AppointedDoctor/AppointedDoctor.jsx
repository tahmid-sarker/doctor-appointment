import React from "react";
import { removeItemToLocalStorage } from "../../utilities/addToDB";
import { useNavigate } from "react-router";

const AppointedDoctor = ({ appointedDoctor }) => {
  const navigate = useNavigate();
  const { id, name, education, speciality, fee } = appointedDoctor;
  const handleCancelAppointment = (id, name) => {
    removeItemToLocalStorage(id, name);
    navigate('/my-bookings')
  };

  return (
    <div className="bg-white mt-8 p-6 sm:p-8 rounded-lg shadow-md">
      <h1 className="text-lg sm:text-xl font-bold">{name}</h1>

      <div className="flex flex-col sm:flex-row sm:justify-between font-medium text-gray-500 mt-4 gap-2">
        <p className="text-sm sm:text-base">{education}, {speciality}</p>
        <p className="text-sm sm:text-base">Appointment Fee : {fee} Taka + Vat</p>
      </div>

      <hr className="my-4 border-2 border-dashed border-gray-200" />

      <button onClick={() => handleCancelAppointment(id, name)} className="hover:bg-red-100 border text-red-600 w-full py-3 sm:py-4 rounded-xl cursor-pointer">
        Cancel Appointment
      </button>
    </div>
  );
};

export default AppointedDoctor;