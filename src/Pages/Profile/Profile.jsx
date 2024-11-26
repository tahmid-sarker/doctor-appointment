import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router";
import { DataContext } from "../Root/Root";
import { TiWarningOutline } from "react-icons/ti";
import { FaRegRegistered } from "react-icons/fa6";
import Error from "../Error/Error";
import {setItemToLocalStorage} from "../../utilities/addToDB"

const Profile = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { doctors } = useContext(DataContext);
  const singleDoctor = doctors.find((doctor) => doctor.id === parseInt(id));
  if (singleDoctor) {
    const { image, name, education, speciality, registration, chamber, fee, availability } = singleDoctor;
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = weekday[new Date().getDay()];
    const isAvailableToday = availability.includes(today);
    const handleBookAppointment = (id, name) => {
      navigate("/my-bookings")
      setItemToLocalStorage(parseInt(id), name)
    }

    return (
      <div className="max-w-7xl mx-auto p-4 flex flex-col gap-6">
        {/* Title and Description */}
        <div className="bg-white rounded-lg shadow py-10 px-6 md:px-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Doctor’s Profile Details</h2>
          <p className="text-gray-600 text-center text-base md:text-lg">
            Learn more about the background, expertise, and availability of our
            certified medical professionals. We are committed to providing the
            highest quality healthcare and personalized service for every
            patient.
          </p>
        </div>

        {/* Doctor's Main Card */}
        <div className="bg-white rounded-lg shadow p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">
          <div className="w-full md:w-1/4">
            <img
              src={image}
              alt={name}
              className="rounded-xl w-full h-96 md:h-auto object-cover object-top"
            />
          </div>

          <div className="w-full md:w-3/4">
            <h3 className="text-2xl md:text-4xl font-bold">{name}</h3>
            <p className="text-lg text-gray-500">{education}</p>
            <p className="text-lg text-gray-500">{speciality}</p>

            <div className="mt-4">
              <p className="text-lg text-gray-500">Working at</p>
              <p className="text-lg font-semibold">{chamber}</p>
              <hr className="my-3 border-2 border-dashed border-gray-200" />
              <p className="text-lg text-gray-500 flex items-center gap-2">
                <FaRegRegistered /> Reg No: {registration}
              </p>
              <hr className="my-3 border-2 border-dashed border-gray-200" />
            </div>

            <div className="mt-4">
              <p className="text-lg font-semibold mb-2">Availability</p>
              <div className="flex gap-2 flex-wrap">
                {availability.map((day, index) => (
                  <span key={index}
                    className="bg-yellow-100 border border-yellow-400 text-yellow-700 font-semibold px-3 py-1 rounded-full text-xs">
                    {day}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <p className="text-gray-700 text-lg">
                Consultation Fee:{" "}
                <span className="text-blue-600 font-semibold">Taka {fee}</span>
                {" "}(incl. VAT){" "}
                <span className="text-blue-500 cursor-pointer">
                  Per consultation
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Book Appointment Section */}
        <div className="bg-white rounded-lg shadow p-6 md:p-8">
          <h3 className="text-xl md:text-2xl font-bold mb-6 text-center">Book an Appointment</h3>

          <hr className="my-4 border-2 border-dashed border-gray-200" />
          <div className="flex justify-between items-center">
            <p className="text-lg font-semibold">Availability</p>
            <div>
              {isAvailableToday ? (
                <span className="text-green-700 border bg-green-100 font-semibold px-4 py-2 rounded-full text-xs md:text-sm">
                  Doctor Available Today
                </span>
              ) : (
                <span className="bg-red-100 text-red-700 border font-semibold px-4 py-2 rounded-full text-xs md:text-sm">
                  Doctor Not Available Today
                </span>
              )}
            </div>
          </div>
          <hr className="my-4 border-2 border-dashed border-gray-200" />

          <div className="bg-orange-100 text-orange-700 p-3 mb-4">
            <span className="flex items-center justify-center gap-2 text-center">
              <TiWarningOutline className="text-2xl shrink-0" />
              <span>
                Due to high patient volume, we are currently accepting
                appointments for today only. We appreciate your understanding
                and cooperation.
              </span>
            </span>
          </div>
          {/* Book Appointment Button */}
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold text-lg cursor-pointer"
          onClick={() => handleBookAppointment(id, name)}>
            Book Appointment Now
          </button>
        </div>
      </div>
    );
  } else {
    return <Error></Error>;
  }
};

export default Profile;