import { NextResponse } from 'next/server';
const mytoken="secrettoken"

export function middleware(req) {
  const token = req.cookies.get('auth-token');

  if (!token||token!=mytoken) {
    const loginUrl = req.nextUrl.clone();
    loginUrl.pathname = '/login';
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};

