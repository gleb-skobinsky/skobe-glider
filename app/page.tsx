import { NavBar } from "./NavBar";
import { TechStack } from "./TechStack";
import { Description } from "./Description";
import { MainSubTitle } from "./MainSubTitle";
import { MainTitle } from "./MainTitle";
import { AvatarImage } from "./AvatarImage";

export default function Home() {
  return (
    <div
      id="root"
      className=" overflow-x-clip main-bg w-[100%] h-fit flex flex-col items-center text-white"
    >
      <NavBar />
      <MainTitle />
      <MainSubTitle />
      <AvatarImage />
      <TechStack />
      <Description />
      <div className=""></div>
    </div>
  );
}
