"use client"
import Image from 'next/image'
import React from 'react'
import {assets} from '@/public/assets/assets'


import Link from "next/link"
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
      <Link href="/" className="text-sm font-semibold font-roboto hover:text-red-500 transition border-r border-white/20 lg:pr-10 last:border-none">HOME</Link>
      <Link href="/about" className="text-sm font-semibold font-roboto hover:text-red-500 transition border-r border-white/20 lg:px-6 last:border-none">ABOUT US</Link>
      <Link href="/products" className="text-sm font-semibold font-roboto hover:text-red-500 transition border-r border-white/20 lg:px-6 last:border-none">PRODUCTS</Link>
      <Link href="/gallery" className="text-sm font-semibold font-roboto hover:text-red-500 transition border-r border-white/20 lg:px-6 last:border-none">GALLERY</Link>
      <Link href="/careers" className="text-sm font-semibold font-roboto hover:text-red-500 transition border-r border-white/20 lg:px-6 last:border-none">CAREERS</Link>
      <Link href="/news" className="text-sm font-semibold font-roboto hover:text-red-500 transition border-r border-white/20 lg:px-6 last:border-none">NEWS & MEDIA</Link>
      <Link href="/contact" className="text-sm font-semibold font-roboto hover:text-red-500 transition border-r border-white/20 lg:px-6 last:border-none">CONTACT US</Link>
      <Link href="/downloads" className="text-sm font-semibold font-roboto hover:text-red-500 transition border-r border-white/20 lg:pl-6 last:border-none">DOWNLOADS</Link>
    </>
  )
}
