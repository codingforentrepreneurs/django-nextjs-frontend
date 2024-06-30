import * as React from "react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function WaitlistCard({waitlistEvent}) {
    if (!waitlistEvent && !waitlistEvent.email ){ 
        return null
    }
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{waitlistEvent.email}</CardTitle>
        <CardDescription>{waitlistEvent.id}</CardDescription>
      </CardHeader>
      <CardContent>

      </CardContent>
    </Card>
  )
}
