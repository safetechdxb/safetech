'use client';
import { assets } from '@/public/assets/assets'
import Image from 'next/image'
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

type NavItem = {
  label: string;
  href: string;
  submenu?: { id: number; label: string; href: string }[];
};

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'About Us',
    href: '/about',
    submenu: [
      { id: 1, label: 'About Us', href: '/about' },
      { id: 2, label: 'Certifications', href: '/certifications' },
    ],
  },
  {
    label: 'Products',
    href: '/products',
    submenu: [
      { id: 3, label: 'Precast Concrete', href: '/products/precast-concrete' },
      { id: 4, label: 'Precast Prestressed', href: '/products/precast-prestressed' },
      { id: 5, label: 'GRC Factory', href: '/products/grc-factory' },
      { id: 6, label: 'Bathroom Pod', href: '#' }
    ],
  },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Careers', href: '/careers' },
  {
    label: 'News & Media',
    href: '/news',
    submenu: [
      { id: 11, label: 'News & Media', href: '/news' },
      { id: 12, label: 'Blog', href: '/blog' },
    ],
  },
  { label: 'Contact Us', href: '/contact-us' },
  { label: 'Downloads', href: '/downloads' },
];

export default function HeaderMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileSubOpen, setMobileSubOpen] = useState<{ [key: string]: boolean }>({});

  const toggleMobileSubmenu = (label: string) => {
    setMobileSubOpen((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  return (
    <header className="w-full bg-transparent border-b border-white/10 absolute top-0 left-0 z-50 py-2">
      <div className="container flex justify-between items-center h-16">
        <Link href={"/"}> <Image src={assets.logo} alt="" width={400} height={400} className="w-auto lg:w-[107px] h-auto brightness-0 invert-100" />  </Link>
        {/* Desktop nav */}
        <nav className="hidden 2xl:flex md:items-center space-x-8">
          {navItems.map((item) =>
            item.submenu ? (
              <div key={item.label} className="relative group">
                <button className="text-14 font-semibold uppercase text-white flex items-center gap-3 hover:text-white/75 leading-[1] border-r border-white/50 pr-8">{item.label}<svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M5.76721 7.09636L11 1.86493L10.0401 0.903641L5.76721 5.1765L1.49571 0.903641L0.534424 1.86493L5.76721 7.09636Z" fill="white" />
                </svg> </button>
                <div className="absolute left-0 pt-2 w-64  pointer-events-none group-hover:pointer-events-auto">
                  <div className="mt-3 bg-white shadow-lg rounded-lg py-2 opacity-0 group-hover:opacity-100 transition">
                    {item.submenu.map((sub) => (
                      <Link key={sub.id} href={sub.href} className="block px-4 py-2 text-14 text-secondary font-semibold hover:bg-light-gray hover:scale-105 transition-all duration-200 mx-3 rounded" >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
                <Link key={item.href} href={item.href} className="text-14 font-semibold uppercase leading-[1] text-white
                 hover:text-white/75 border-r border-white/50 last:border-r-0 pr-8 last:pr-0 transition">
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Mobile menu button */}
        <button onClick={() => setIsOpen(true)} className="2xl:hidden text-white" aria-label="Open menu" >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile sliding menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div key="backdrop" initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black z-40" onClick={() => setIsOpen(false)} />
            <motion.nav key="menu" initial={{ x: '-100%' }} animate={{ x: 0 }} exit={{ x: '-100%' }} transition={{ type: 'tween' }} className="fixed top-0 left-0 bottom-0 w-72 bg-black
             shadow-lg z-50 p-6 overflow-y-auto" >
              <div className="flex justify-between items-center mb-6">
                <Link href={"/"} > <Image src={assets.logo} alt="" width={100} height={100} className='object-fit-contain brightness-0 invert-100' />  </Link>
                <button onClick={() => setIsOpen(false)} aria-label="Close menu" >
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {navItems.map((item) =>
                item.submenu ? (
                  <div key={item.label} className="mb-4">
                    <button onClick={() => toggleMobileSubmenu(item.label)} className="w-full flex justify-between items-center text-white font-medium" >
                      {item.label}
                      <span>{mobileSubOpen[item.label] ? '−' : '+'}</span>
                    </button>
                    <AnimatePresence>
                      {mobileSubOpen[item.label] && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="mt-2 pl-4 space-y-2" >
                          {item.submenu.map((sub) => (
                            <Link key={sub.href} href={sub.href} className="block text-white hover:text-blue-600 text-sm" onClick={() => setIsOpen(false)} >
                              {sub.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link key={item.href} href={item.href} className="block text-white hover:text-blue-600 mb-4 font-medium" onClick={() => setIsOpen(false)} >
                    {item.label}
                  </Link>
                )
              )}
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
