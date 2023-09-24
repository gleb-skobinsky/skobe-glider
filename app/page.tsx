import Image from "next/image";
import { Poppins, Playfair_Display } from "next/font/google";
import GridIcon from "./gridIcon";

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
    <div className="main-bg w-[100vw] h-fit flex flex-col items-center text-white">
      <div className="w-full h-20 sticky top-0 flex items-center justify-center">
        <div
          className={
            "flex flex-row text-xl font-poppins w-[80%] justify-between items-center " +
            poppins.className
          }
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
          <div className="flex flex-row gap-4 items-center">
            <div className="cursor-pointer">About</div>
            <div className="cursor-pointer">Projects</div>
            <div className="cursor-pointer">Contact</div>
            <div className="cursor-pointer border-2 border-white p-2">
              Hire Me
            </div>
          </div>
        </div>
      </div>
      <div className={`mt-[10%] text-7xl ${playfair.className}`}>
        I&apos;m Gleb Gutnik
      </div>
      <div className=" text-xl text-stone-500 mt-5">
        Mid-level software developer and tech enthusiast
      </div>
      <Image
        className="rounded-full border-2 border-white my-20"
        src="/glider.png"
        width={500}
        height={700}
        alt="Picture of the author"
      />
      <div className="bg-slate-950 py-20 w-full px-[10%]">
        <div className={`mb-20 text-3xl ${poppins.className}`}>
          My experience in the industry:
        </div>
        <div className="grid grid-cols-5 gap-y-20 gap-x-4">
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
      <h1 className={`my-16 text-4xl ${playfair.className}`}>
        Software developer at <a href="https://www.smart-dn.ru/">SmartDN</a>
      </h1>
      <div className="text-xl text-stone-500 mb-[10vh] mx-[10%]">
        While fast delivery of high-quality robust solutions to the business is
        always my top priority, I also focus on writing readable, thoroughly
        tested and well-documented code. I&apos;m obsessed with following best
        practices and design patterns that are of importance to the stack
        I&apos;m using, be it MVVM for Android with Compose, multimodule
        architecture for a Ktor backend or microservices for a FastAPI app.
        Industriousness, commitment, and strive to perfection are the three
        pillars of my work as an engineer.
      </div>
      <div className=""></div>
    </div>
  );
}
