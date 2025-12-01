import Image from "next/image";

export default function ProfilePicture() {
  return (
    <Image
      src={
        "https://avatars.githubusercontent.com/u/118791965?s=400&u=f948cbfe745a96b420241159936b90cf442a6ccc&v=4"
      }
      alt="Profile picture"
      className="rounded-xl object-cover"
      width={250}
      height={350}
    />
  );
}
