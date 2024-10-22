import Link from 'next/link'
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Address</h3>
            <p>123 Hostel Street</p>
            <p>City, State 12345</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">VK PG Boys Hostel</h3>
            <div className="flex justify-center space-x-4 mb-4">
              <a href="#" className="hover:text-[#C8A27A]" aria-label="Facebook">
                <Facebook />
              </a>
              <a href="#" className="hover:text-[#C8A27A]" aria-label="Instagram">
                <Instagram />
              </a>
              <a href="#" className="hover:text-[#C8A27A]" aria-label="Twitter">
                <Twitter />
              </a>
              <a href="#" className="hover:text-[#C8A27A]" aria-label="YouTube">
                <Youtube />
              </a>
            </div>
          </div>
          <div className="text-right">
            <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
            <p>T. +91 123 456 7890</p>
            <p>M. contact@vkpghostel.com</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p>&copy; 2024 VK PG Boys Hostel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
