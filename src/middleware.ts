/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable no-console */
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // Helper function to parse the Cookie header into an object
  function parseCookies(cookieHeader: string | null) {
    const list: Record<string, string> = {};

    if (cookieHeader) {
      cookieHeader.split(';').forEach((cookie) => {
        const parts = cookie.split('=');
        const key = parts.shift()?.trim(); // Extract the key
        const value = parts.join('=');
        if (key) list[key] = decodeURI(value);
      });
    }

    return list;
  }

  console.log(
    `Received ${request.method} request to ${request.url} at ${new Date()}`,
  );

  const isAuthenticated = request.headers.get('authenticated') === 'true';
  const topsecretKey = request.headers.get('Authorization');
  const cookies = request.cookies.get('myCookie'); // Corrected to use the 'cookie' header

  console.log(cookies);

  // Check if a specific cookie exists
  // @ts-ignore
  console.log(`Authenticated: ${isAuthenticated}`);
  console.log(`Authorization: ${topsecretKey}`);
  // @ts-ignore
  console.log(`Has myCookie: ${cookies?.value}`);

  // Depending on whether the cookie is present, perform actions, e.g., redirect or allow the request
  if (cookies) {
    // Perform action when the cookie is present
    // For example, allow the request to proceed
    return NextResponse.next();
  }
  // Perform action when the cookie is not present
  // For example, redirect to a different URL
  return NextResponse.redirect('http://localhost:8080');
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/api/test'],
};
