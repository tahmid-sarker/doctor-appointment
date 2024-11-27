import React, { use, useState } from "react";
import Doctor from "./Doctor";
import { DataContext } from "../../Pages/Root/Root";

const Doctors = () => {
  const [isViewAll, setIsViewAll] = useState(false);
  const {doctors} = use(DataContext)
  return (
    <section className="my-20 mx-12.5">
      {/* Title and Description */}
      <h1 className="text-4xl font-bold text-center mb-4">Our Best Doctors</h1>
      <p className="text-lg text-center">
        Our platform connects you with verified, experienced doctors across
        various specialties — all at your convenience. Whether it's a routine
        checkup or urgent consultation, book appointments in minutes and receive
        quality care you can trust.
      </p>
      {/* Doctors List */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {doctors
          .filter((doctor) => doctor.id <= 6)
          .map((doctor, index) => (
            <Doctor key={index} doctor={doctor}></Doctor>
          ))}
        {isViewAll &&
          doctors
            .filter((doctor) => doctor.id > 6)
            .map((doctor, index) => (
              <Doctor key={index} doctor={doctor}></Doctor>
            ))}
      </div>
      {/* View All Doctors Button */}
      <div className="flex justify-center mt-8">
        <button className="btn bg-[#176AE5] text-white text-lg font-bold hover:bg-[#0f55b4] border-0 rounded-full px-8 py-6"
          onClick={() => setIsViewAll(!isViewAll)}>
          {isViewAll ? "View Less Doctors" : "View All Doctors"}
        </button>
      </div>
    </section>
  );
};

export default Doctors;