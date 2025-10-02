import { NextRequest, NextResponse } from 'next/server';
import { getNowPlaying } from '../../lib/spotify';

export async function GET(req: NextRequest) {
    const response = await getNowPlaying();
    return NextResponse.json(response);
}