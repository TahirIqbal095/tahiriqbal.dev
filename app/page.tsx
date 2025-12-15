import AboutMe from "@/components/landing/about-me";
import AddressCard from "@/components/landing/address-card";
import { CurrentStatus } from "@/components/landing/current-status";
import { ExperienceAndEdu } from "@/components/landing/experience-education";
import { Leetcode } from "@/components/landing/leetcode";
import { leetcodeStats } from "@/lib/leetcode-stats";

export default async function LandingPage() {
  const stats = await leetcodeStats();
  return (
    <div className="grid grid-cols-6 grid-rows-4 gap-6 mt-6">
      <div className="col-span-1 row-span-1">
        <AddressCard />
      </div>
      <div className="col-span-1 row-span-1">
        <CurrentStatus />
      </div>
      <div className="col-span-2 row-span-1">
        <AboutMe />
      </div>
      <div className="col-span-2 row-span-2">
        <ExperienceAndEdu />
      </div>

      <div className="col-span-2 row-span-2">
        <Leetcode stats={stats} />
      </div>
    </div>
  );
}
