'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { LanguageIcon, LinkedIcon, LinkedInIcon } from '../icons/home';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-[#f9fbfe] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <Image className='h-18' src="/icons/logo.svg" alt="Supreme Group Logo" height={40} width={140} />
            </Link>
          </div>

          {/* Desktop Items */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/contact">
              <button className="bg-sky-400 text-white px-4 py-2 rounded-full hover:bg-sky-500 transition">
                Contact Us
              </button>
            </Link>
            <Link href="https://linkedin.com" target="_blank">
              <LinkedIcon />
            </Link>
            <div className="flex items-center gap-1">
              <LanguageIcon />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setOpen(!open)}>
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden flex flex-col items-start gap-4 mt-4 pb-6">
            <Link href="/contact" className="text-sm font-medium">Contact Us</Link>
            <Link href="https://linkedin.com" target="_blank" className="text-sm font-medium">
            <LinkedIcon />
            </Link>
            <div className="flex items-center gap-2">
              <LanguageIcon />
              <span className="text-sm font-medium">EN</span>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
