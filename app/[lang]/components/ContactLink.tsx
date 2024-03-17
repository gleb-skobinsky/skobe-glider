import React from "react";
import Image from "next/image";

export function ContactLink(props: { src: string; alt: string; link: string }) {
  return (
    <a className="flex items-center justify-center" href={props.link}>
      <Image src={props.src} alt={props.alt} width={100} height={100} />
    </a>
  );
}
