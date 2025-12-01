import AddressCard from "@/components/address-card";
// import ProfilePicture from "@/components/profile-picture";

export default function LandingPage() {
  return (
    <div className="grid grid-cols-4 gap-6 mt-6">
      <div className="col-span-1">
        <AddressCard />
      </div>
    </div>
  );
}
