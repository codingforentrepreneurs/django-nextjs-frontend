"use server"
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function POST(request) {
    const data = await request.json()
    console.log(data)

    // const authToken = cookies().get("auth-token")
    cookies().set({
        name: 'auth-token',
        value: 'abc',
        httpOnly: true, // limit client-side js
        sameSite: 'strict',
        secure: process.env.NODE_ENV !== 'development',
        maxAge: 3600,
    })
    return NextResponse.json({"hello": "world"}, {status: 200})
}   