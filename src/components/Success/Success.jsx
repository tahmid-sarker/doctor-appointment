import React from "react";
import { asset } from "../../utils/asset";
import CountUpImport from "react-countup";

// Vite/CJS interop: react-countup nests default twice
const CountUp =
  typeof CountUpImport === "function"
    ? CountUpImport
    : typeof CountUpImport?.default === "function"
      ? CountUpImport.default
      : CountUpImport?.default?.default;

const Success = () => {
  return (
    <section className="my-20 mx-12.5">
      {/* Title and Description */}
      <h1 className="text-4xl font-bold text-center mb-4">We Provide Best Medical Services</h1>
      <p className="text-lg text-center">
        Our platform connects you with verified, experienced doctors across
        various specialties — all at your convenience.
      </p>
      {/* Success Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        <div className="bg-white shadow-md rounded-lg p-8 flex flex-col items-center">
          <img src={asset("icons/success-doctor.png")} alt="Success Doctors" className="w-20 h-20 md:w-16 md:h-16 mb-4" />
          <div className="text-4xl md:text-6xl font-bold mt-2">
            <CountUp start={0} end={789} duration={7} />
          </div>
          <div className="text-sm mt-1">Total Doctors</div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-8 flex flex-col items-center">
          <img src={asset("icons/success-patients.png")} alt="Success Patients" className="w-20 h-20 md:w-16 md:h-16 mb-4" />
          <div className="text-4xl md:text-6xl font-bold mt-2">
            <CountUp start={0} end={1243} duration={7} separator="," />
          </div>
          <div className="text-sm mt-1">Total Reviews</div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-8 flex flex-col items-center">
          <img src={asset("icons/success-review.png")} alt="Success Review" className="w-20 h-20 md:w-16 md:h-16 mb-4" />
          <div className="text-4xl md:text-6xl font-bold mt-2">
            <CountUp start={0} end={8720} duration={7} separator="," />
          </div>
          <div className="text-sm mt-1">Patients</div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-8 flex flex-col items-center">
          <img src={asset("icons/success-staffs.png")} alt="Success Staffs" className="w-20 h-20 md:w-16 md:h-16 mb-4" />
          <div className="text-4xl md:text-6xl font-bold mt-2">
            <CountUp start={0} end={165} duration={7} />
          </div>
          <div className="text-sm mt-1">Total Staffs</div>
        </div>
      </div>
    </section>
  );
};

export default Success;
