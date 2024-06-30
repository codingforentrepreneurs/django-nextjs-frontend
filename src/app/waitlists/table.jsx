"use client"

import { useAuth } from "@/components/authProvider"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import fetcher from "@/lib/fetcher"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import useSWR from "swr"


const WAITLIST_API_URL = "/api/waitlists/"


export default function WaitlistTable() {
    const router = useRouter()
    const {data, error, isLoading} = useSWR(WAITLIST_API_URL, fetcher)
    const auth = useAuth()
    useEffect(()=>{
      if (error?.status === 401) {
        auth.loginRequiredRedirect()
      }
    }, [auth, error])
    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>
    return (
      <Table>
        <TableCaption>A list of your waitlist entries.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item, idx) => (
            <TableRow className="hover:cursor-pointer" key={`item-${idx}`} onClick={e=>router.push(`/waitlists/${item.id}`)}>
              <TableCell className="font-medium">{item.id}</TableCell>
              <TableCell className="font-medium">{item.email}</TableCell>
              <TableCell className="font-medium">{item.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }
  