import { NextResponse } from 'next/server';
import {getBlogPosts} from "../../blog/utils";

export async function GET() {
    const response = getBlogPosts()
    return NextResponse.json(response);
}