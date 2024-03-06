/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable no-console */
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

// This function can be marked `async` if using `await` inside
export function GET(request: NextRequest) {
  const response = NextResponse.next();

  response.headers.set('X-Custom-Header', 'Hello, Ballsack!');
  response.headers.set('Authorization', '2345123534534');
  response.cookies.set('ballsack', '2');

  console.log(
    `Received ${request.method} request to ${request.url} at ${new Date()}`,
  );

  const isAuthenticated = request.headers.get('authenticated') === 'true';
  // const topsecretKey = response.headers.set('Authorization', '2345123534534');
  const cookies = request.cookies.get('ballsack'); // Corrected to use the 'cookie' header
  const tsKey = request.headers.get('Authorization') === '2345123534534';

  // Check if a specific cookie exists
  // @ts-ignore
  console.log(`Authenticated: ${isAuthenticated}`);
  console.log(`Authorization: ${tsKey}`);
  // @ts-ignore
  console.log(`Has Test Cookie: ${cookies?.value}`);

  // Depending on whether the cookie is present, perform actions, e.g., redirect or allow the request
  if (cookies) {
    // Perform action when the cookie is present
    // For example, allow the request to proceed
    return NextResponse.redirect('http://localhost:3000/about', request.url);
  }
  // Perform action when the cookie is not present
  // For example, redirect to a different URL
  return NextResponse.redirect('http://localhost:3000/info');
}
