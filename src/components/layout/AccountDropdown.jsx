"use client"

import Link from "next/link"
import { CircleUser, Menu, Package2, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useAuth } from "../authProvider"

import NavLinks, {NonUserLinks} from './NavLinks'
import BrandLink from "./BrandLink"
import MobileNavbar from "./MobileNavbar"
import { useRouter } from "next/navigation"



export default function AccountDropdown({className}) {
    const auth = useAuth()
    const router = useRouter()

    return  <DropdownMenu>
    <DropdownMenuTrigger asChild>
    <Button variant="secondary" size="icon" className="rounded-full">
        <CircleUser className="h-5 w-5" />
        <span className="sr-only">Toggle user menu</span>
    </Button>
    </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
        <DropdownMenuLabel>{auth.username? auth.username : "Account"}</DropdownMenuLabel>
        <DropdownMenuItem onClick={e=> router.push('/logout')}>Logout</DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
}