import React from "react";
import { asset } from "../../utils/asset";

const Banner = () => {
  return (
    <section className="px-6 md:px-20 lg:px-32 py-12 bg-gray-100 rounded-2xl flex flex-col items-center gap-6 border-4 border-white">
      {/* Title and Description */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold leading-tight">
        Dependable Care, Backed by Trusted Professionals.
      </h1>
      <p className="text-base md:text-lg text-center max-w-2xl">
        Our platform connects you with verified, experienced doctors across
        various specialties — all at your convenience. Whether it's a routine
        checkup or urgent consultation, book appointments in minutes and
        receive quality care you can trust.
      </p>
      {/* Search Bar and Button */}
      <div className="flex flex-col sm:flex-row items-center gap-2 w-full max-w-2xl">
        <input type="text" placeholder="Search any doctor" className="input input-bordered w-full rounded-full px-7 py-6 bg-white" />
        <button className="btn bg-[#176AE5] text-white text-lg font-bold hover:bg-[#0f55b4] border-0 rounded-full px-7 py-6">
          Search Now
        </button>
      </div>
      {/* Banner Images */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-6">
        <img src={asset("images/banner-img-1.png")} alt="Banner Image" className="w-96 h-48 md:w-72 md:h-44 lg:w-[578px] lg:h-[350px] object-contain" />
        <img src={asset("images/banner-img-1.png")} alt="Banner Image" className="w-96 h-48 md:w-72 md:h-44 lg:w-[578px] lg:h-[350px] object-contain" />
      </div>
    </section>
  );
};

export default Banner;