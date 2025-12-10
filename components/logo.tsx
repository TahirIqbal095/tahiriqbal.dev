"use client";

import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      <Image
        src={"/assets/logo-img.png"}
        alt="Logo"
        width={40}
        height={40}
        className="rounded-md cursor-pointer hover:scale-95 transition-transform duration-200 object-cover"
        priority
      />
      <div className="flex flex-col leading-tight">
        <h1 className="text-primary/90 font-medium text-sm">Tahir Iqbal</h1>
        <p className="text-xs text-muted-foreground">Software Engineer</p>
      </div>
    </div>
  );
};

export default Logo;
