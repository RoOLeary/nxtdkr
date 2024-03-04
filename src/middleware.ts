/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable no-console */
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  response.headers.set('X-Custom-Header', 'Hello, Middleware!');
  response.cookies.set('myCookie', '123');

  console.log(
    `Received ${request.method} request to ${request.url} at ${new Date()}`,
  );

  const isAuthenticated = request.headers.get('authenticated') === 'true';
  const topsecretKey = request.headers.get('Authorization');
  const cookies = request.cookies.get('slurps'); // Corrected to use the 'cookie' header

  console.log(cookies);

  // Check if a specific cookie exists
  // @ts-ignore
  console.log(`Authenticated: ${isAuthenticated}`);
  console.log(`Authorization: ${topsecretKey}`);
  // @ts-ignore
  console.log(`Has Test Cookie: ${cookies?.value}`);

  // Depending on whether the cookie is present, perform actions, e.g., redirect or allow the request
  if (cookies) {
    // Perform action when the cookie is present
    // For example, allow the request to proceed
    return NextResponse.next();
  }
  // Perform action when the cookie is not present
  // For example, redirect to a different URL
  // return NextResponse.redirect('http://localhost:8080');
  return response;
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/api/test'],
};
