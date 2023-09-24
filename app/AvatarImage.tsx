import Image from "next/image";
import React from "react";

export function AvatarImage({}) {
  return (
    <div className="grid-icon">
      <Image
        className="rounded-full border-2 border-white my-20"
        src="/glider.png"
        alt="Picture of the author"
        width={500}
        height={500}
      />
    </div>
  );
}
