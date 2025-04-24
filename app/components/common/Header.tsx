"use client"
import Image from 'next/image'
import React from 'react'
import {assets} from '@/public/assets/assets'

import { ChevronDown } from 'lucide-react'
import Link from "next/link"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  // DropdownMenuLabel,
  // DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function Header() {
  return (
    <header className="bg-transparent absolute top-0 left-0 text-white z-10 w-full border-b-1 border-[#ffffff50]">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <Image src={assets.logo} alt=""/> 

        {/* Desktop Nav */}
        <nav className="hidden lg:flex text-sm font-semibold items-center">
          <NavLinks />
        </nav>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger>
              <Menu className="h-6 w-6 text-white" />
            </SheetTrigger>
            <SheetContent side="left" className="bg-[#12181F] text-white w-64">
              <SheetTitle><p className='hidden'>Safe Tech</p></SheetTitle>
              <SheetHeader>
                <Image src={assets.logo} alt="" />
              </SheetHeader>
              <nav className="flex flex-col gap-[2em] text-sm font-semibold pl-4">
                <NavLinks />
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

function NavLinks() {
  return (
    <>
      <Link href="/" className="text-sm font-semibold font-roboto hover:text-white/75 transition border-r border-white/20 lg:pr-10 last:border-none">HOME</Link>
      <Link href="/about" className="text-sm font-semibold font-roboto hover:text-white/75 transition border-r border-white/20 lg:px-6 last:border-none">ABOUT US</Link>

      {/* PRODUCTS DROPDOWN */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="text-sm font-semibold font-roboto hover:text-white/75 transition border-r border-white/20 lg:px-6 last:border-none flex items-center gap-1 focus-visible:outline-none">
            PRODUCTS <ChevronDown className="w-4 h-4" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-[#12181F] text-white border-white/10 mt-2">
          <DropdownMenuItem asChild>
            <Link href="/products/category1" className="w-full px-2 py-1">Category 1</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/products/category2" className="w-full px-2 py-1">Category 2</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Link href="/gallery" className="text-sm font-semibold font-roboto hover:text-white/75 transition border-r border-white/20 lg:px-6 last:border-none">GALLERY</Link>
      <Link href="/careers" className="text-sm font-semibold font-roboto hover:text-white/75 transition border-r border-white/20 lg:px-6 last:border-none">CAREERS</Link>

      {/* NEWS & MEDIA DROPDOWN */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="text-sm font-semibold hover:text-white/75 transition border-r border-white/20 lg:px-6 last:border-none flex items-center gap-1 focus-visible:border-none focus-visible:outline-none">
            NEWS & MEDIA <ChevronDown className="w-4 h-4" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-[#12181F] text-white border-white/10 mt-2">
          <DropdownMenuItem asChild>
            <Link href="/news" className="w-full px-2 py-1">News & Events</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/blog" className="w-full px-2 py-1">Blog</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Link href="/contact" className="text-sm font-semibold font-roboto hover:text-white/75 transition border-r border-white/20 lg:px-6 last:border-none">CONTACT US</Link>
      <Link href="/downloads" className="text-sm font-semibold font-roboto hover:text-white/75 transition border-r border-white/20 lg:pl-6 last:border-none">DOWNLOADS</Link>
    </>
  )
}