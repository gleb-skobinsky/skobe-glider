import { Contacts } from "./components/Contacts";
import { Projects } from "./components/Projects";
import { NavBar } from "./components/NavBar";
import { TechStack } from "./components/TechStack";
import { Description } from "./components/Description";
import { MainSubTitle } from "./components/MainSubTitle";
import { MainTitle } from "./components/MainTitle";
import { AvatarImage } from "./components/AvatarImage";
import { getDictionary } from "./dictionaries";

type Props = {
  params: { [lang: string]: string };
};

export default async function Home({ params: { lang } }: Props) {
  const dict: LangDict = await getDictionary(lang);
  return (
    <div className=" overflow-x-clip main-bg w-[100%] h-fit flex flex-col items-center text-white">
      <NavBar langDict={dict} />
      <MainTitle text={dict.MainTitle} />
      <MainSubTitle text={dict.MainSubtitle} />
      <AvatarImage />
      <TechStack header={dict.Experience} />
      <Description dict={dict} />
      <Projects dict={dict} />
      <Contacts title={dict.ContactMe} />
      <div className="h-40"></div>
    </div>
  );
}
