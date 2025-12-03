import AddressCard from "@/components/address-card";
import { CurrentStatus } from "@/components/current-status";
// import ProfilePicture from "@/components/profile-picture";

export default function LandingPage() {
  return (
    <div className="grid grid-cols-4 gap-6 mt-6 items-stretch auto-rows-fr">
      <div className="col-span-1">
        <AddressCard />
      </div>
      <div className="col-span-1">
        <CurrentStatus />
      </div>
    </div>
  );
}
