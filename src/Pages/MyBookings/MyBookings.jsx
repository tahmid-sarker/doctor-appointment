import React, { useContext } from "react";
import AppointedDoctor from "../../components/AppointedDoctor/AppointedDoctor";
import { DataContext } from "../Root/Root";
import { getItemFromLocalStorage } from "../../utilities/addToDB";
import { Link } from "react-router";
import Rechart from "../../components/Rechart/Rechart";

const MyBookings = () => {
  const { doctors } = useContext(DataContext);
  const getLocalStorageData = getItemFromLocalStorage();
  const isHaveData = Boolean(getLocalStorageData.length);
  const appointedDoctors = doctors.filter((doctor) =>
    getLocalStorageData.includes(doctor.id)
  );
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-8">
      {isHaveData &&  <Rechart appointedDoctors={appointedDoctors} />}
      {/* Title and Description */}
      <div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold mb-4">My Today's Appointments</h1>
        <p className="text-base md:text-lg text-center">
          Our platform connects you with verified, experienced doctors across
          various specialties — all at your convenience.
        </p>
      </div>

      {/* Appointed Doctors List or Empty State */}
      {isHaveData ? (
        <div>
          {appointedDoctors.map((appointedDoctor, index) => <AppointedDoctor key={index} appointedDoctor={appointedDoctor} />)}
        </div>
      ) : (
        <div className="bg-white mt-8 p-6 sm:p-10 rounded-xl text-center shadow-md">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">No Doctor Appointed</h1>
          <hr className="my-4 border-2 border-dashed border-gray-200" />
          <p className="text-gray-500 text-base mb-6">
            Looks like you haven't scheduled any appointments yet.
          </p>
          <Link to="/">
            <button className="btn bg-[#176AE5] text-white text-base sm:text-lg font-semibold hover:bg-[#0f55b4] border-0 rounded-full px-6 py-3">
              Get an Appointment
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default MyBookings;