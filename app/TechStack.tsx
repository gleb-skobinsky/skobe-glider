import GridIcon from "./gridIcon";
import React from "react";
import { poppins } from "./fonts";

export function TechStack({}) {
  return (
    <div id="tech-stack" className="bg-slate-950 py-20 w-full px-[10%]">
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
        <GridIcon src="/fastapi.svg" alt="FastAPI" />
        <GridIcon src="/django.svg" alt="Django" />
      </div>
    </div>
  );
}
