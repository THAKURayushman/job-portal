import React from "react";

const JobCard = ({ job }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 hover:scale-105 transition-transform duration-300">
      <h2 className="text-xl font-semibold text-blue-700 mb-2">{job.title}</h2>
      <p className="text-gray-800 mb-1">{job.company}</p>
      <p className="text-gray-600 text-sm">{job.location}</p>
      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
        View Details
      </button>
    </div>
  );
};

export default JobCard;
