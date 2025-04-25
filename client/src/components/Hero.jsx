import React from "react";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section className="bg-gray-100 text-center py-16 px-4">
      <h1 className="text-4xl font-bold text-blue-700 mb-4">
        <TypeAnimation
          sequence={[
            "Find Your Dream Job",
            2000,
            "Apply. Get Hired. Grow.",
            2000,
            "Thousands of Jobs Await!",
            2000,
          ]}
          wrapper="span"
          speed={20}
          repeat={Infinity}
        />
      </h1>
      <p className="text-gray-700 mb-6 max-w-xl mx-auto">
        Browse jobs, post resumes, and connect with top companies.
      </p>
    </section>
  );
};

export default Hero;
