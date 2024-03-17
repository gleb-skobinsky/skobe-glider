import "server-only";

const dictionaries: Record<string, () => Promise<any>> = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  ru: () => import("./dictionaries/ru.json").then((module) => module.default),
};

export const getDictionary = async (locale: string): Promise<LangDict> =>
  dictionaries[locale]() as Promise<LangDict>;
