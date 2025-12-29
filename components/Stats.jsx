"use client";

import { usePathname } from "next/navigation";
import { stats } from "@/constants";

export const Stats = () => {
  const pathname = usePathname();

  // Hide stats on certain routes
  if (
    pathname === "/partition-system" ||
    pathname === "/electrical" ||
    pathname === "/extra-low-voltage" ||
    pathname === "/hvac" ||
    pathname === "/plumbing" ||
    pathname === "/fire-fighting"
  ) {
    return null;
  }

  return (
    <section className="bg-[#F4F0EC] flex flex-col md:flex-row items-center justify-between p-6 md:p-20 gap-y-8">
      {stats.map((el, index) => (
        <div
          key={index}
          className="flex flex-col gap-y-4 text-center flex-1
                     md:border-r-[#CDA274] md:border-r-[2px]
                     md:last-of-type:border-none"
        >
          <span className="text-[#CDA274] font-bold text-6xl">{el.number}</span>
          <span className="text-[#4D5053] font-medium text-lg">{el.text}</span>
        </div>
      ))}
    </section>
  );
};