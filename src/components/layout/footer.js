import { Twitter, Linkedin, Instagram, FileText } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { FooterOverlay } from '../icons/home';

export default function Footer() {
  return (
    <footer className="relative bg-white pt-16 pb-8 px-4 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <Link href="/" className="inline-block">
            <Image
              src="/icons/logo.svg"
              alt="Supreme Group Logo"
              width={200}
              height={60}
              className="h-12 w-auto"
            />
          </Link>
        </div>

        {/* Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Applications Column */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-gray-800">APPLICATIONS</h3>
            <ul className="space-y-3">
              <li><Link href="/applications/apparel" className="text-gray-600 hover:text-blue-600">Apparel</Link></li>
              <li><Link href="/applications/automotive" className="text-gray-600 hover:text-blue-600">Automotive</Link></li>
              <li><Link href="/applications/filtration" className="text-gray-600 hover:text-blue-600">Filtration</Link></li>
              <li><Link href="/applications/customised-solutions" className="text-gray-600 hover:text-blue-600">Customised Solutions</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-gray-800">COMPANY</h3>
            <ul className="space-y-3">
              <li><Link href="/company/innovation" className="text-gray-600 hover:text-blue-600">Innovation</Link></li>
              <li><Link href="/company/global-competency" className="text-gray-600 hover:text-blue-600">Global Competency</Link></li>
              <li><Link href="/company/about-us" className="text-gray-600 hover:text-blue-600">About Us</Link></li>
              <li><Link href="/company/contact-us" className="text-gray-600 hover:text-blue-600">Contact Us</Link></li>
            </ul>
          </div>

          {/* More Column */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-gray-800">MORE</h3>
            <ul className="space-y-3">
              <li><Link href="/careers" className="text-gray-600 hover:text-blue-600">Careers</Link></li>
              <li><Link href="/privacy-policy" className="text-gray-600 hover:text-blue-600">Privacy Policy</Link></li>
              <li><Link href="/terms-and-conditions" className="text-gray-600 hover:text-blue-600">Terms and Conditions</Link></li>
            </ul>
          </div>

          {/* Follow Us Column */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-gray-800">FOLLOW US</h3>
            <ul className="space-y-3">
              <li>
                <Link href="https://twitter.com" className="flex items-center text-gray-600 hover:text-blue-600">
                  <Twitter size={16} className="mr-2" />
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="https://linkedin.com" className="flex items-center text-gray-600 hover:text-blue-600">
                  <Linkedin size={16} className="mr-2" />
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link href="https://instagram.com" className="flex items-center text-gray-600 hover:text-blue-600">
                  <Instagram size={16} className="mr-2" />
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="https://medium.com" className="flex items-center text-gray-600 hover:text-blue-600">
                  <FileText size={16} className="mr-2" />
                  Medium
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright and Address */}
        <div className="text-sm text-gray-600 border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between">
          <div>©2023. All Rights Reserved.</div>
          <div>Supreme house: 110, 16th Road, Chembur, Mumbai - 400071.</div>
        </div>
      </div>
      <div className="absolute top-0 right-0">
        <FooterOverlay />
      </div>
    </footer>
  );
}