import { Description } from "./Description";
import { MainSubTitle } from "./MainSubTitle";
import { MainTitle } from "./MainTitle";
import { AvatarImage } from "./AvatarImage";
import { MobileMenu } from "./MobileMenu";
import GridIcon from "./gridIcon";
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
      <div className="bg-slate-950 py-20 w-full px-[10%]">
        <div className={`mb-20 text-3xl ${poppins.className}`}>
          My experience in the industry:
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-20 gap-x-4">
          <GridIcon src="/kotlin.svg" alt="Kotlin language" />
          <GridIcon src="/kmp.svg" alt="Kotlin Multiplatform" />
          <GridIcon src="/compose.png" alt="Compose Multiplatform" />
          <GridIcon src="/ktor.svg" alt="Ktor library" />
          <GridIcon src="/gradle.svg" alt="Gradle build tool" />
          <GridIcon src="/docker.svg" alt="Docker" />
          <GridIcon src="/nginx.svg" alt="Nginx" />
          <GridIcon src="/python.svg" alt="Python" />
          <GridIcon src="/csharp.svg" alt="C#" />
          <GridIcon src="/blazor.png" alt="Blazor" />
          <GridIcon src="/postgres.png" alt="PostgreSQL" />
          <GridIcon src="/js.svg" alt="JavaScript" />
          <GridIcon src="/vuejs.svg" alt="Vue.js" />
        </div>
      </div>
      <Description />
      <div className=""></div>
    </div>
  );
}
