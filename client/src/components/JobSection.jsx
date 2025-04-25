// JobSection.jsx

import React, { useState } from "react";
import JobCard from "./JobCard"; // Assume this shows individual job cards

const JobSection = () => {
  const [serchjob, setsearchjob] = useState("");
  const categories = [
    "All",
    "Frontend",
    "Backend",
    "Fullstack",
    "Design",
    "Human Resource",
    "Data Analyst",
    "Business Analyst",
  ];

  const jobs = [
    {
      id: 1,
      title: "Frontend Dev",
      category: "Frontend",
      company: "Google",
      location: "Gurugram",
    },
    {
      id: 2,
      title: "Backend Dev",
      category: "Backend",
      company: "TCS",
      location: "Bengaluru",
    },
    {
      id: 3,
      title: "UI Designer",
      category: "Design",
      company: "NextUI",
      location: "Noida",
    },
    {
      id: 4,
      title: "Fullstack Engineer",
      category: "Fullstack",
      company: "Infosys",
      location: "Noida",
    },
    // Add more jobs here...
  ];

  const filteredJobs =
    serchjob.trim() === ""
      ? jobs
      : jobs.filter((job) =>
          job.title.toLowerCase().includes(serchjob.toLowerCase())
        );

  return (
    <>
      {/* Dropdown Filter Section */}
      <section className="bg-blue-600 py-6 px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* search bar */}
          <div className="flex items-center gap-2 max-w-md mx-auto mt-4">
            <input
              type="text"
              placeholder="Search from millions of jobs"
              value={serchjob}
              onChange={(e) => setsearchjob(e.target.value)}
              className="flex-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></input>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Jobs Grid Section */}
      <section className="bg-gray-100 py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => <JobCard key={job.id} job={job} />)
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No jobs found.
            </p>
          )}
        </div>
      </section>
    </>
  );
};

export default JobSection;
