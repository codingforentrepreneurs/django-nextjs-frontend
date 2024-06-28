import { getToken } from "@/lib/auth";
import { NextResponse } from "next/server";
import ApiProxy from "../proxy";

const DJANGO_API_WAITLISTS_URL="http://127.0.0.1:8001/api/waitlists/"

export async function GET(request){
    const response = await ApiProxy.get(DJANGO_API_WAITLISTS_URL, true)
    const result = await response.json()
    let status = response.status
    return NextResponse.json(result, {status: status})
}


export async function POST(request) {
    const requestData = await request.json()
    const response = await ApiProxy.post(DJANGO_API_WAITLISTS_URL, requestData, true )
    try {
        await response.json()
    } catch (error) {
        NextResponse.json({message: "Invalid request."}, {status: response.status})
    }
    if (response.ok) {
        return NextResponse.json({}, {status: 200})
    }
    return NextResponse.json({}, {status: 400})
}   