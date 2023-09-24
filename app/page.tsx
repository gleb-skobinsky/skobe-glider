import { TechStack } from "./TechStack";
import { Description } from "./Description";
import { MainSubTitle } from "./MainSubTitle";
import { MainTitle } from "./MainTitle";
import { AvatarImage } from "./AvatarImage";
import { MobileMenu } from "./MobileMenu";
import { poppins } from "./fonts";

export default function Home() {
  return (
    <div className=" overflow-x-hidden main-bg w-[100vw] h-fit flex flex-col items-center text-white">
      <div className="w-full h-20 sticky top-0 flex items-center justify-center">
        <div
          className={`flex flex-row text-xl w-[80%] justify-between items-center ${poppins.className}`}
        >
          <div className="flex gap-2 items-center">
            <a
              href="/"
              className="cursor-pointer rounded-full border-2 border-white h-8 w-8 flex items-center justify-center"
            >
              <div>G</div>
            </a>
            <div>Gleb Gutnik</div>
          </div>
          <div className="hidden lg:flex flex-row gap-4 items-center">
            <div className="cursor-pointer">About</div>
            <div className="cursor-pointer">Projects</div>
            <div className="cursor-pointer">Contact</div>
            <div className="cursor-pointer border-2 border-white p-2">
              Hire Me
            </div>
          </div>
          <MobileMenu />
        </div>
      </div>
      <MainTitle />
      <MainSubTitle />
      <AvatarImage />
      <TechStack />
      <Description />
      <div className=""></div>
    </div>
  );
}
