import type { NextRequest } from 'next/server';

// This function can be marked `assync` if using `await` inside
export function middleware(request: NextRequest) {
  // eslint-disable-next-line no-console
  console.log(request.url);
  // return NextResponse.redirect(new URL('/contact', request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/api/test',
};
