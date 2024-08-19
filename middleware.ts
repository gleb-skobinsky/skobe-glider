import { NextRequest } from "next/server";

let locales = ["en", "ru"];

const PUBLIC_FILE = /\.(.*)$/;

export function middleware(request: NextRequest) {
  if (
    request.nextUrl.pathname.startsWith("/_next") ||
    request.nextUrl.pathname.includes("/api/") ||
    PUBLIC_FILE.test(request.nextUrl.pathname)
  ) {
    return;
  }
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  const locale = "en";
  request.nextUrl.pathname = `/${locale}${pathname}`;
  // e.g. if the incoming request is /products
  // the new URL iwill be /en/products
  return Response.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next).*)",
    // Only run on root (/) URL
    "/",
  ],
};
