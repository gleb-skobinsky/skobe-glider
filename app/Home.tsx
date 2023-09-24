import Image from "next/image";
import GridIcon from "./gridIcon";
import { poppins, playfair } from "./page";

export default function Home() {
  return (
    <div className="main-bg w-[100vw] h-fit flex flex-col items-center text-white">
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
          <section className="MOBILE-MENU flex lg:hidden">
            <div className="HAMBURGER-ICON space-y-2">
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            </div>
            <div>
              <div className="absolute top-0 right-0 px-8 py-8">
                <svg
                  className="h-8 w-8 text-gray-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
              <ul className="NAVIGATION-MOBILE-OPEN flex flex-col items-center justify-between">
                <li className="border-b border-gray-400 uppercase">
                  <a href="/about">About</a>
                </li>
                <li className="border-b border-gray-400 uppercase">
                  <a href="/">Projects</a>
                </li>
                <li className="border-b border-gray-400 uppercase">
                  <a href="/">Contact</a>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
      <div className={`mt-[10%] text-7xl ${playfair.className}`}>
        I&apos;m Gleb Gutnik
      </div>
      <div className=" text-xl text-stone-500 mt-5">
        Mid-level software developer and tech enthusiast
      </div>
      <div className="rounded-full border-2 border-white my-20 w-[300px] md:w-[500px] h-[300px] md:h-[500px] relative">
        <Image
          className="rounded-full"
          src="/glider.png"
          alt="Picture of the author"
          layout="fill"
        />
      </div>
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
