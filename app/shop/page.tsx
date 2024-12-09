import Image from 'next/image'
import { Star, ShoppingCart } from 'lucide-react'
import { Button } from '@/components/ui/button'

const products = [
  {
    id: 1,
    name: 'Red Wine Collection',
    price: 29.99,
    rating: 5,
    image: '/placeholder.svg'
  },
  {
    id: 2,
    name: 'Strawberry Cupcake',
    price: 3.99,
    rating: 4,
    image: '/placeholder.svg'
  },
  {
    id: 3,
    name: 'Cocktail Special',
    price: 12.99,
    rating: 5,
    image: '/placeholder.svg'
  },
  {
    id: 4,
    name: 'Margherita Pizza',
    price: 14.99,
    rating: 4,
    image: '/placeholder.svg'
  },
  {
    id: 5,
    name: 'Cappuccino',
    price: 4.99,
    rating: 5,
    image: '/placeholder.svg'
  },
  // Add more products as needed
]

export default function ShopPage() {
  return (
    <div className="bg-gray-900 min-h-screen">
      <header className="bg-gray-800 py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-white">Our Shop</h1>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-white mb-2">{product.name}</h2>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-orange-500 font-bold">${product.price.toFixed(2)}</span>
                  <div className="flex items-center">
                    {[...Array(product.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current text-yellow-500" />
                    ))}
                  </div>
                </div>
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <nav className="inline-flex rounded-md shadow">
            <Button variant="outline" className="rounded-l-md">
              Previous
            </Button>
            <Button variant="outline" className="rounded-none">
              1
            </Button>
            <Button variant="outline" className="rounded-none">
              2
            </Button>
            <Button variant="outline" className="rounded-none">
              3
            </Button>
            <Button variant="outline" className="rounded-r-md">
              Next
            </Button>
          </nav>
        </div>
      </main>
    </div>
  )
}

