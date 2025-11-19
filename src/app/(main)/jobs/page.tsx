"use client";

import { JobSearch } from "@/components/search/JobSearch";
import { JobFilters } from "@/components/jobs/JobFilters";
import React, { useEffect } from "react";
import { JobCard } from "@/components/cards/JobCard";
import {
  useGetNewFourJobsMutation,
  useGetJobsWithFiltersMutation,
} from "@/redux/features/job/jobApi";
import { TJob } from "@/types/job";
import { CardSkeleton } from "@/components/skeleton/CardSkeleton";

function JobPage() {
  const [getNewFourJobs, { data: newJobsData, isLoading: newJobsLoading }] =
    useGetNewFourJobsMutation();

  const [getJobsWithFilters, { data: allJobsData, isLoading: allJobsLoading }] =
    useGetJobsWithFiltersMutation();

  useEffect(() => {
    getNewFourJobs({});
    getJobsWithFilters({});
  }, [getNewFourJobs, getJobsWithFilters]);

  return (
    <div>
      <div className="bg-[#F7F6F2]">
        <h2 className="text-3xl md:text-4xl text-[#362F05] text-center pt-10 mb-24">
          Find Your <span className="text-green-400">Ultimate Job</span>
          <br />
          Search Companion
        </h2>
        <JobSearch />
        <JobFilters />
      </div>

      {/* Jobs */}
      <div className="container mx-auto px-4 md:px-0">
        {/* New Jobs */}
        <div>
          <h2 className="text-2xl md:text-4xl text-red-400 font-semibold my-10">
            New Jobs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-8">
            {newJobsLoading ? (
              <>
                {Array.from({ length: 4 }).map((_, index) => (
                  <CardSkeleton key={index} />
                ))}
              </>
            ) : newJobsData?.data && newJobsData.data.length > 0 ? (
              newJobsData.data.map((job: TJob) => (
                <JobCard key={job._id} job={job} />
              ))
            ) : (
              <p className="col-span-full text-center text-gray-500">
                No new jobs available
              </p>
            )}
          </div>
        </div>

        {/* All Jobs */}
        <div>
          <h2 className="text-2xl md:text-4xl font-semibold my-10">All Jobs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-8">
            {allJobsLoading ? (
              <>
                {Array.from({ length: 8 }).map((_, index) => (
                  <CardSkeleton key={index} />
                ))}
              </>
            ) : allJobsData?.data && allJobsData.data.length > 0 ? (
              allJobsData.data.map((job: TJob) => (
                <JobCard key={job._id} job={job} />
              ))
            ) : (
              <p className="col-span-full text-center text-gray-500">
                No jobs available
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobPage;
