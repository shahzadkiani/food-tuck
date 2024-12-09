'use client'
import Link from 'next/link'
import { Button } from './ui/button'
import { Input } from './ui/input'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link href="/menu" className="text-gray-400 hover:text-white">Menu</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-white">Blog</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <p className="text-gray-400">123 Main St, City, Country</p>
            <p className="text-gray-400">Phone: +1 234 567 890</p>
            <p className="text-gray-400">Email: info@Elite-Food-Restaurant.com</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for updates</p>
            <div className="flex">
              <Input type="email" placeholder="Your email" className="rounded-r-none" />
              <Button variant="default" className="bg-orange-500 hover:bg-orange-600 rounded-l-none">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">&copy; 2024 shahzadkiani. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

