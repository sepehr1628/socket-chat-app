import { auth } from "./app/_lib/auth";

export const middleware = auth;

export const config = {
  matcher: ["/((?!signin|_next/static|_next/image|favicon.ico|api).*)"],
  // matcher: ["/account"],
};
