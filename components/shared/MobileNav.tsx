"use client"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { navLinks } from "@/constants"
import { SignedIn, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"


const MobileNav = () => {
  const pathname = usePathname();

  
  return (
    <header className="header">
      <Link href="/" className="flex items-center gap-2 md:py-2">
        <Image src="/assets/logo.png" alt="Mobile Menu Logo - AI Image Studio "
          width={180}
          height={28}
        />
      </Link>
      <nav className="flex gap-2">
        <SignedIn>
          <UserButton/>
          <Sheet>
            <SheetTrigger>
              <Image 
                src="/assets/icons/menu.svg"
                alt="menu"
                width={32}
                height={32}
                className="cursor-pointer"

              />
            </SheetTrigger>
            <SheetContent className="sheet-content sm:w-64">
              <SheetHeader>
                <>
                  <Image src="/assets/logo.png"
                    alt="logo"
                    width={152}
                    height={23}
                  />
                   <ul className="header-nav_elements">
              {
                navLinks.slice(0,6).map((link) => {
                  const isActive = link.route == pathname

                  return (
                    <li key={link.route} 
                        className={`${isActive && 'text-dark-400'} p-18 flex whitespace-nowrap text-dark-700`} >
                     
                    
                    <Link className="sidebar-link" href={link.route} >
                      <Image 
                        src={link.icon}
                        alt="logo"
                        width={24}
                        height={24}
                        // className={`${isActive && 'brightness-200' } `}
                      />   {link.label}
                    </Link>
                    </li>
                  )
                })
              }

            </ul>
                </>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </SignedIn>
      </nav>
    </header>
  )
}

export default MobileNav