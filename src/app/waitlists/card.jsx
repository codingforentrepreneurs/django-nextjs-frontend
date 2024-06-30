"use client"

import {useState} from "react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
const WAITLIST_API_URL = "/api/waitlists/"



export function WaitlistCard({waitlistEvent}) {
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState({})
  const [error, setError] = useState('')

    if (!waitlistEvent && !waitlistEvent.email ){ 
        return null
    }

   
  async function handleSubmit (event) {
        event.preventDefault()
        setMessage('')
        setErrors({})
        setError('')
        const formData = new FormData(event.target)
        const objectFromForm = Object.fromEntries(formData)
        const jsonData = JSON.stringify(objectFromForm)
        const requestOptions = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: jsonData
        }
        const response = await fetch(`${WAITLIST_API_URL}${waitlistEvent.id}/`, requestOptions)
        const data = await response.json()
        console.log(data)
        if (response.status === 201 || response.status === 200) {
            setMessage("Data changed")
        }
    }
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{waitlistEvent.email}</CardTitle>
        <CardDescription>{waitlistEvent.id}</CardDescription>
      </CardHeader>
      <CardContent>
        {message && <p>{message}</p>}
        <form onSubmit={handleSubmit}>
          <Textarea
          rows={3}
          defaultValue={waitlistEvent.description}
          name='description' 
          placeholder="Your Description" />
          <Button type="submit" className="w-full">
          Save Description
        </Button>
        </form>



      </CardContent>
    </Card>
  )
}
