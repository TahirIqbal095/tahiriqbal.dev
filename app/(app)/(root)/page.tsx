import AboutMe from "@/components/about-me";
import AddressCard from "@/components/address-card";
import { CurrentStatus } from "@/components/current-status";
import { ExperienceAndEdu } from "@/components/experience-education";

export default async function LandingPage() {
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
    </div>
  );
}
