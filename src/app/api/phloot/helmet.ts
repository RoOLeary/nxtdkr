// eslint-disable-next-line import/no-extraneous-dependencies

'use client';

import { kv } from '@vercel/kv';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  // eslint-disable-next-line no-console
  console.log(request);
  const user = await kv.hgetall('user:ronan');
  if (user) {
    return NextResponse.next(user);
  }

  return NextResponse.next();
}
