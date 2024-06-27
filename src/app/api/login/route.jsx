"use server"
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

const DJANGO_API_LOGIN_URL = "http://127.0.0.1:8001/api/token/pair"

export async function POST(request) {
    const myAuthToken = cookies().get('auth-token')
    console.log(myAuthToken.value)
    
    const requestData = await request.json()
    const jsonData = JSON.stringify(requestData)
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: jsonData
    }
    const response = await fetch(DJANGO_API_LOGIN_URL, requestOptions)
    const responseData = await response.json()
    if (response.ok) {
        console.log("logged in")
        const authToken = responseData.access
        cookies().set({
            name: 'auth-token',
            value: authToken,
            httpOnly: true, // limit client-side js
            sameSite: 'strict',
            secure: process.env.NODE_ENV !== 'development',
            maxAge: 3600,
        })
    }

    // const authToken = cookies().get("auth-token")
   
    return NextResponse.json({"hello": "world"}, {status: 200})
}   