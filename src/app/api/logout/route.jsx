import { deleteTokens } from "@/lib/auth";
import { NextResponse } from "next/server";


export async function POST(request) {
    deleteTokens()
    return NextResponse.json({}, {status: 200})
}