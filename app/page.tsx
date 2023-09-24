import { Contacts } from "./Contacts";
import { Projects } from "./Projects";
import { NavBar } from "./NavBar";
import { TechStack } from "./TechStack";
import { Description } from "./Description";
import { MainSubTitle } from "./MainSubTitle";
import { MainTitle } from "./MainTitle";
import { AvatarImage } from "./AvatarImage";
import { playfair } from "./fonts";

export default function Home() {
  return (
    <div className=" overflow-x-clip main-bg w-[100%] h-fit flex flex-col items-center text-white">
      <NavBar />
      <MainTitle />
      <MainSubTitle />
      <AvatarImage />
      <TechStack />
      <Description />
      <Projects />
      <Contacts />
      <div className="h-40"></div>
    </div>
  );
}
