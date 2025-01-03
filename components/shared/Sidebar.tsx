"use client"

import { navLinks } from "@/constants"
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "../ui/button"

const Sidebar = () => {
  const pathname = usePathname()

  return (
    <div className="sidebar">
      <div className="flex size-full flex-col gap-4">
        <Link href="/" className="sidebar-logo">
          <Image src="/assets/logo-white.png" width={180} height={28} style={{ marginTop: "-50px" }} alt="Logo"/>
        </Link>

        <nav className="sidebar-nav">
          <SignedIn>
            <ul className="sidebar-nav_elements">
              {
                navLinks.slice(0,6).map((link) => {
                  const isActive = link.route == pathname

                  return (
                    <li key={link.route} className={`sidebar-nav_element group ${isActive ? 'bg-blue-500 text-white' : 'text-gray-700'}`} >
                     
                    
                    <Link className="sidebar-link" href={link.route} >
                      <Image 
                        src={link.icon}
                        alt="logo"
                        width={24}
                        height={24}
                        className={`${isActive && 'brightness-200' } `}
                      />   {link.label}
                    </Link>
                    </li>
                  )
                })
              }

            </ul>
            

            <ul>
            {
                navLinks.slice(6).map((link) => {
                  const isActive = link.route == pathname

                  return (
                    <li key={link.route} className={`sidebar-nav_element group ${isActive ? 'bg-blue-500 text-white' : 'text-gray-700'}`} >
                     
                    
                    <Link className="sidebar-link" href={link.route} >
                      <Image 
                        src={link.icon}
                        alt="logo"
                        width={24}
                        height={24}
                        className={`${isActive && 'brightness-200' } `}
                      />   {link.label}
                    </Link>
                    </li>
                  )
                })
              }
              <li className="flex-cecnter cursor-pointer gap-2 p-4">
                <UserButton showName/>
              </li>
            </ul>
          </SignedIn>

          <SignedOut>
            <Button asChild className="button bg-blue-500 bg-cover">
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
        </nav>       
      </div>
    </div>
  )
}
export default Sidebar