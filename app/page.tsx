import Image from "next/image";
import { Poppins, Playfair_Display } from "next/font/google";

const poppins = Poppins({
  weight: "500",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  weight: "700",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="main-bg w-[100vw] h-fit flex flex-col items-center">
      <div className="w-full h-20 sticky top-0 flex items-center justify-center">
        <div
          className={
            "flex flex-row text-xl font-poppins w-[80%] justify-between items-center " +
            poppins.className
          }
        >
          <div className="flex gap-2 items-center">
            <div className="rounded-full border-2 border-white h-8 w-8 flex items-center justify-center">
              <div>G</div>
            </div>
            <div>Gleb Gutnik</div>
          </div>
          <div className="flex flex-row gap-4 items-center">
            <div className="cursor-pointer">About</div>
            <div className="cursor-pointer">Projects</div>
            <div className="cursor-pointer">Conatct</div>
            <div className="cursor-pointer border-2 border-white p-2">
              Hire Me
            </div>
          </div>
        </div>
      </div>
      <div className={"mt-[10%] text-7xl " + playfair.className}>
        I&apos;m Gleb Gutnik
      </div>
      <div className=" text-xl text-stone-500 mt-5">
        Middle software developer and tech enthusiast
      </div>
      <Image
        className="rounded-full border-2 border-white my-10"
        src="/glider.png"
        width={500}
        height={700}
        alt="Picture of the author"
      />
    </div>
  );
}
