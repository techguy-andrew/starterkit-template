import { NextResponse } from 'next/server';

export async function POST() {
  return NextResponse.json({ message: 'Webhooks API endpoint - POST method' });
}
