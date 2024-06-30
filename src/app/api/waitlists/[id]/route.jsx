"use server"

import { DJANGO_API_ENDPOINT } from "@/config/defaults";
import { NextResponse } from "next/server";
import ApiProxy from "../../proxy";

const DJANGO_API_WAITLISTS_URL=`${DJANGO_API_ENDPOINT}/waitlists/`

export async function GET(request, {params}) {
    const endpoint = params?.id ? `${DJANGO_API_WAITLISTS_URL}${params.id}/` : null
    if (!endpoint){
        return NextResponse.json({}, {status: 400})
    }
    const {data, status} = await ApiProxy.get(endpoint, true)
    return NextResponse.json(data, {status: status})
}


export async function PUT(request, {params}) {
    const endpoint = params?.id ? `${DJANGO_API_WAITLISTS_URL}${params.id}/` : null
    const requestData = await request.json()
    const {data, status} = await ApiProxy.put(endpoint, requestData, true )
    return NextResponse.json(data, {status: status})
}   

export async function DELETE(request, {params}) {
    const endpoint = params?.id ? `${DJANGO_API_WAITLISTS_URL}${params.id}/delete/` : null
    const {data, status} = await ApiProxy.delete(endpoint, true )
    return NextResponse.json(data, {status: status})
}   