"use client"
import {useState} from 'react';
import Image from "next/image";
import useSWR from 'swr';
import { useAuth } from '@/components/authProvider';
import { ThemeToggleButton } from '@/components/themeToggleButton';
import WaitlistForm from './waitlists/forms';


const fetcher = (...args) => fetch(...args).then(res => res.json())


export default function Home() {
  const auth = useAuth()
  const {data, error, isLoading} = useSWR("/api/hello", fetcher)
  // if (error) return <div>failed to load</div>
  // if (isLoading) return <div>loading...</div>
 
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>{data && data.apiEndpoint}</div>
      <div>
        <WaitlistForm />
      </div>
      <div>
        {auth.isAuthenticated ? "Hello user" : "Hello guest"}
      </div>
      <div>
        <ThemeToggleButton />
      </div>

    </main>
  );
}
