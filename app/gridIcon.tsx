import Image from "next/image";

export default function GridIcon(props: { src: string; alt: string }) {
  return (
    <div className="grid-item">
      <Image src={props.src} width={100} height={100} alt={props.alt} />
    </div>
  );
}
