"use client"

import fetcher from "@/lib/fetcher"
import useSWR from "swr"
import { WaitlistCard } from "../card"


export default function Page({params}) {
  const lookupId = params ? params.id : 0
  const {data, error, isLoading} = useSWR(`/api/waitlists/${lookupId}`, fetcher)
  console.log(data, error, isLoading)
  return <main className="flex min-h-screen flex-col items-center justify-between p-24">
    {isLoading ? <div>Loading</div>
      : 
      <WaitlistCard waitlistEvent={data} />
    }
  </main>
}
