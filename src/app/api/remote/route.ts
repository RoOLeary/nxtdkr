/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable no-console */
import { cookies } from 'next/headers';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

// This function can be marked `async` if using `await` inside
export function GET(request: NextRequest) {
  const cookieStore = cookies();
  const response = NextResponse.next();

  response.headers.set(
    'X-Custom-Header',
    'Hello, Codestonerus Maximumus Ronanicus!',
  );
  response.headers.set('Authorization', '2345123534534');
  cookieStore.set('doesoutsidesuck', '1');

  console.log(
    `Received ${request.method} request to ${request.url} at ${new Date()}`,
  );

  const cks = cookieStore.get('doesoutsidesuck'); // Corrected to use the 'cookie' header
  const tsKey = response.headers.get('Authorization');

  console.log(`Authorization: ${tsKey}`);
  // @ts-ignore
  console.log(`Has Test Cookie: ${cks?.name}`);

  // Depending on whether the cookie is present, perform actions, e.g., redirect or allow the request

  if (cks) {
    console.log(`Has Doesoutsidesuck Cookie: ${cks?.name}`);
    // Perform action when the cookie is present
    // For example, allow the request to proceed
    // @ts-ignore
    return NextResponse.redirect('http://localhost:3000/about', request?.url);
    // return NextResponse.next();
  }

  return NextResponse.redirect('http://localhost:3000/info');
}
