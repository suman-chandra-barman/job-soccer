"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

interface FilterOption {
  label: string
  value: string
}

interface FilterDropdownProps {
  label: string
  options: FilterOption[]
  value?: string
  onValueChange?: (value: string) => void
  isActive?: boolean
}

function FilterDropdown({ label, options, value, onValueChange, isActive }: FilterDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className={cn(
            "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors",
            isActive ? "bg-[#6B5B3A] text-white" : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50",
          )}
        >
          {value ? options.find((opt) => opt.value === value)?.label || label : label}
          <ChevronDown className="w-4 h-4" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-48">
        <DropdownMenuRadioGroup value={value} onValueChange={onValueChange}>
          {options.map((option) => (
            <DropdownMenuRadioItem key={option.value} value={option.value}>
              {option.label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export function JobFilters() {
  const [timeFilter, setTimeFilter] = useState("last-week")
  const [aiScoreFilter, setAiScoreFilter] = useState("")
  const [experienceFilter, setExperienceFilter] = useState("")
  const [jobTypeFilter, setJobTypeFilter] = useState("")

  const timeOptions: FilterOption[] = [
    { label: "Last Week", value: "last-week" },
    { label: "Last Month", value: "last-month" },
    { label: "Last 3 Months", value: "last-3-months" },
    { label: "Last 6 Months", value: "last-6-months" },
  ]

  const aiScoreOptions: FilterOption[] = [
    { label: "90-100", value: "90-100" },
    { label: "80-89", value: "80-89" },
    { label: "70-79", value: "70-79" },
    { label: "60-69", value: "60-69" },
    { label: "Below 60", value: "below-60" },
  ]

  const experienceOptions: FilterOption[] = [
    { label: "Entry Level", value: "entry" },
    { label: "Mid Level", value: "mid" },
    { label: "Senior Level", value: "senior" },
    { label: "Executive", value: "executive" },
  ]

  const jobTypeOptions: FilterOption[] = [
    { label: "Full Time", value: "full-time" },
    { label: "Part Time", value: "part-time" },
    { label: "Contract", value: "contract" },
    { label: "Freelance", value: "freelance" },
  ]

  return (
    <div className="flex flex-wrap items-center justify-center gap-3 p-4 rounded-lg">
      <FilterDropdown
        label="Last Week"
        options={timeOptions}
        value={timeFilter}
        onValueChange={setTimeFilter}
      />

      <FilterDropdown
        label="AI Score"
        options={aiScoreOptions}
        value={aiScoreFilter}
        onValueChange={setAiScoreFilter}
      />

      <FilterDropdown
        label="Experience level"
        options={experienceOptions}
        value={experienceFilter}
        onValueChange={setExperienceFilter}
      />

      <FilterDropdown label="Job" options={jobTypeOptions} value={jobTypeFilter} onValueChange={setJobTypeFilter} />
    </div>
  )
}
