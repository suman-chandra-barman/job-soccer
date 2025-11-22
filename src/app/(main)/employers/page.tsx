"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import FindYourDreamTeam from "@/components/employer/FindYourDreamTeam";
import { EmployerCard } from "@/components/cards/EmployerCard";
import { EmployerSearch } from "@/components/search/EmploerSearch";
import { IEmployer } from "@/types/user";
import { useGetEmployerFeaturedQuery } from "@/redux/features/employer/employerApi";
import { EmployerCardSkeletonGrid } from "@/components/skeleton";
import Link from "next/link";

// Employer category configuration
const EMPLOYER_CATEGORIES = [
  { key: "Academy", label: "Academy", href: "/all-employer?category=academy" },
  {
    key: "HighSchool",
    label: "High School",
    href: "/all-employer?category=high-school",
  },
  {
    key: "CollegeUniversity",
    label: "College/University",
    href: "/all-employer?category=college-university",
  },
  {
    key: "ProfessionalClub",
    label: "Professional Club",
    href: "/all-employer?category=professional-club",
  },
  {
    key: "AmateurClub",
    label: "Amateur Club",
    href: "/all-employer?category=amateur-club",
  },
  { key: "Agent", label: "Agent", href: "/all-employer?category=agent" },
  {
    key: "ConsultingCompany",
    label: "Consulting Company",
    href: "/all-employer?category=consulting-company",
  },
] as const;

/**
 * Reusable section component for employer categories
 */
interface EmployerSectionProps {
  title: string;
  employers?: IEmployer[];
  isLoading?: boolean;
  href: string;
}

const EmployerSection = ({
  title,
  employers,
  isLoading,
  href,
}: EmployerSectionProps) => (
  <section className="my-8">
    <div className="flex items-center justify-between py-4">
      <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
      <Button variant="link" className="text-black hover:text-green-500">
        <Link href={href}>See All</Link>
      </Button>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
      {isLoading ? (
        <EmployerCardSkeletonGrid count={4} className="contents" />
      ) : (
        employers?.map((employer) => (
          <EmployerCard key={employer._id} employer={employer} />
        ))
      )}
    </div>
  </section>
);

function EmployersPage() {
  const { data: featuredEmployersData, isLoading } =
    useGetEmployerFeaturedQuery(null);

  return (
    <section>
      {/* Search Section */}
      <div className="bg-[#F7F6F2]">
        <EmployerSearch />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-0">
        {/* Dream Team Section */}
        <FindYourDreamTeam />

        {/* Employer Categories */}
        {EMPLOYER_CATEGORIES.map((category) => (
          <EmployerSection
            key={category.key}
            title={category.label}
            employers={featuredEmployersData?.data?.[category.key]}
            isLoading={isLoading}
            href={category.href}
          />
        ))}
      </div>
    </section>
  );
}

export default EmployersPage;
