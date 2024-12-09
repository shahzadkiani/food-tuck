import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Header() {
  return (
    <header className="bg-black shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-orange-500">
        Food-Tuck-Restaurant
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="/" className="text-gray-300 hover:text-orange-500">Home</Link></li>
            <li><Link href="/menu" className="text-gray-300 hover:text-orange-500">Menu</Link></li>
            <li><Link href="/team" className="text-gray-300 hover:text-orange-500">Our Team</Link></li>
            <li><Link href="/blog" className="text-gray-300 hover:text-orange-500">Blog</Link></li>
            <li><Link href="/contact" className="text-gray-300 hover:text-orange-500">Contact</Link></li>
          </ul>
        </nav>
        <Button variant="default" className="bg-orange-500 hover:bg-orange-600 text-white">
          Order Now
        </Button>
      </div>
    </header>
  )
}

