"use client"

import Link from "next/link"
import { useAuth } from "../authProvider"
import NavLinks, {NonUserLinks} from './NavLinks'
import BrandLink from "./BrandLink"
import MobileNavbar from "./MobileNavbar"
import AccountDropdown from "./AccountDropdown"


export default function Navbar({className}) {
    const auth = useAuth()
    const finalClass = className ? className : "sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6"
    return  <header className={finalClass}>
    <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <BrandLink displayName={true} />
        {NavLinks.map((navLinkItem, idx)=>{
            const shouldHide = !auth.isAuthenticated &&navLinkItem.authRequired

            return shouldHide ? null : <Link
                href={navLinkItem.href}
                key={`nav-links-a-${idx}`}
                className="text-muted-foreground transition-colors hover:text-foreground"
            >
                {navLinkItem.label}
            </Link>
        })}
    </nav>
    <MobileNavbar />
    <div className="md:hidden">
        <BrandLink displayName={true} />
    </div>
    <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
      {auth.isAuthenticated ?
      <div className="ml-auto">
        <AccountDropdown />
        </div>
    : <div className="ml-auto space-x-2">
        {NonUserLinks.map((navLinkItem, idx)=>{
            const shouldHide = !auth.isAuthenticated &&navLinkItem.authRequired

            return shouldHide ? null : <Link
                href={navLinkItem.href}
                key={`nav-links-d-${idx}`}
                className="text-muted-foreground transition-colors hover:text-foreground"
            >
                {navLinkItem.label}
            </Link>
        })}
        </div>}
    </div>
  </header>
}