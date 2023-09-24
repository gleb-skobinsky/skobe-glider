import Image from "next/image";
import React from "react";

export function AvatarImage({}) {
  return (
    <div className="relative z-0 rounded-full border-2 border-white my-20 w-[300px] md:w-[500px] h-[300px] md:h-[500px]">
      <Image
        className="rounded-full"
        src="/glider.png"
        alt="Picture of the author"
        layout="fill"
      />
    </div>
  );
}
