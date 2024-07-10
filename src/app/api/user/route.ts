// eslint-disable-next-line import/no-extraneous-dependencies
// import { kv } from '@vercel/kv';
import { NextResponse } from 'next/server';

export async function GET() {
  const user = 'ronan';
  return NextResponse.json(user);
}
