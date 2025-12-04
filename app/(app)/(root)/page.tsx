import AboutMe from "@/components/about-me";
import AddressCard from "@/components/address-card";
import { CurrentStatus } from "@/components/current-status";
// import ProfilePicture from "@/components/profile-picture";

export default function LandingPage() {
  return (
    <div className="grid grid-cols-6 grid-rows-5 items-stretch gap-6 mt-6">
      <div className="col-span-1 grid-rows-1">
        <AddressCard />
      </div>
      <div className="col-span-1 grid-rows-1">
        <CurrentStatus />
      </div>
      <div className="col-span-2 grid-rows-1">
        <AboutMe />
      </div>
    </div>
  );
}
