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